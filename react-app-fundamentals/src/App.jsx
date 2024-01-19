import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EventBind from './Components/EventBind'
import ClassComponent from './Components/ClassComponent'
import FunctionalComponent from './Components/FunctionalComponent'
import SetStateClassComponent from './Components/SetStateClassComponent'
import FunctionalParentComponent from './Components/FunctionalParentComponent'
import LifeCycleParentMounting from './Components/LifeCycles/LifeCycleParentMounting'
import LifeCycleParentUpdating from './Components/LifeCycles/LifeCycleParentUpdating'

import ParentComponent from './Components/PureComponent/ParentComponent'
import ParentMemoComponent from './Components/Memo/ParentMemoComponent'
import InputRefsComponent from './Components/Refs/InputRefsComponent'
import FormClassComponent from './Components/Forms/FormClassComponent'
import ErrorBoundaryClassComponent from './Components/ErrorBoundary/ErrorBoundaryClassComponent'
import HeroComponent from './Components/ErrorBoundary/HeroComponent'
import CouterOnclick from './Components/HigherOrderComponent/CouterOnclick'
import CounterOnHover from './Components/HigherOrderComponent/CounterOnHover'
import Counter from './Components/RenderProps/Counter'
import OnClickCounterComponent from './Components/RenderProps/onClickCounterComponent'
import ComponentA from './Components/Context/ComponentA'
import { UserContext } from './Components/Context/UserContext/UserContext'
import PostList from './Components/Http/PostList'
import CreatePost from './Components/Http/CreatePost'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ClassComponent/>
      <FunctionalComponent/>
      <SetStateClassComponent/>
      <EventBind/>
      <FunctionalParentComponent/> */}
      {/* <LifeCycleParentMounting/> */}

      {/* <LifeCycleParentUpdating/> */}

      {/* <ParentComponent/> */}
      {/* <InputRefsComponent />
      <ParentMemoComponent /> */}

      {/* <FormClassComponent /> */}

      {/* ErrorBoundaries Approach-1*/}

      {/* <ErrorBoundaryClassComponent>
        <HeroComponent heroName="Superman"></HeroComponent>
      </ErrorBoundaryClassComponent>
      <ErrorBoundaryClassComponent>
        <HeroComponent heroName="Batman"></HeroComponent>
      </ErrorBoundaryClassComponent>
      <ErrorBoundaryClassComponent>
        <HeroComponent heroName="Joker"></HeroComponent>
      </ErrorBoundaryClassComponent> */}

      {/* ErrorBoundaries Approach-2*/}
      {/* 
      <ErrorBoundaryClassComponent>
        <HeroComponent heroName="Superman"></HeroComponent>
        <HeroComponent heroName="Batman"></HeroComponent>
        <HeroComponent heroName="Joker"></HeroComponent>
      </ErrorBoundaryClassComponent> */}
      {/* HOC */}
      {/* <CouterOnclick />
      <CounterOnHover /> */}
      {/* HOC */}
      {/* Render props */}
      {/* <Counter>
        {(counter, incrementCounter) => {
          <OnClickCounterComponent counterr={counter} incrementCounterr={incrementCounter} />
        }}
      </Counter> */}
      {/* Render props */}

      {/* Context */}
      {/* <UserContext.Provider value='Hello Senthil'>
        <ComponentA />
      </UserContext.Provider> */}
      {/* Context */}

      {/* Http */}
      {/* <PostList /> */}
      {/* Http */}

      {/* Http Post */}
      <CreatePost />
      {/* Http Post*/}

    </>
  )
}

export default App
