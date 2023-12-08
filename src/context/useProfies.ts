import { useState } from "react"
import type { ProfisState, Profi } from "@/types/context"

const initialState: ProfisState = []

const useProfis = () => {
  const [profis, setProfis] = useState<ProfisState>(initialState)
  const [incrementor, setIncrementor] = useState<number>(1)
  const [profiIsLoading, setProfiIsLoading] = useState<boolean>(false)
  const [selectedProfiId, setSelectedProfiId] = useState<number | null>(null)

  async function getProfis(amount: number): Promise<Profi[]> {
    const API_URL = `https://randomuser.me/api/?results=#AMOUNT#&nat=de&inc=name,email,phone,cell,gender,location,picture`

    try {
      setProfiIsLoading(true)
      const profisRes = (await (await fetch(API_URL.replace('#AMOUNT#', amount.toString()))).json())
      return [...profisRes.results]
    } catch (err: any) {
      throw new Error('Error: Failed to fetch profis list.' + err.message)
    } finally {
      setProfiIsLoading(false)
    }
  }

  async function initProfis() {
    const profisArray = await getProfis(20)
    setProfis(profisArray)
    setIncrementor(1)
  }

  async function addProfis() {
    const additionalProfis = await getProfis(incrementor)
    setProfis(prev => [...prev, ...additionalProfis]);
    setIncrementor(prev => prev * 2);
  }

  async function removeProfi(id: number) {
    const filteredProfis = [...profis.slice(0, id), ...profis.slice(id + 1)]
    setProfis([...filteredProfis]);
  }

  function getProfi(id?: number) {
    if (typeof id === 'number') {
      setSelectedProfiId(id)
    } else {
      setSelectedProfiId(null)
    }
  }

  return { profis, incrementor, profiIsLoading, selectedProfiId, initProfis, getProfis, addProfis, removeProfi, getProfi }
}

export default useProfis