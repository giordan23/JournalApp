import React from 'react'
import { Route, Router } from 'react-router'
import { JournalScreeen } from '../components/journal/JournalScreeen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/auth' component={ AuthRouter }></Route>
                    <Route path='/' component={ JournalScreeen }></Route>
                </Switch>
        </Router>
        </div>
    )
}
