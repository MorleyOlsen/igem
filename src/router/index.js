import Home from '../page/Home.vue'

//hp file
import hp from "../page/hp/hp.vue"
import Education from "../page/hp/Education.vue"
import Collaborations from"../page/hp/Collaborations.vue"

//project file
import Description from '../page/project/Description.vue'
import Design from '../page/project/Design.vue'
import Engineering from '../page/project/Engineering.vue'
import Safety from '../page/project/Safety.vue'
import Award from '../page/project/Award.vue'

//lab file
import Modeling from '../page/lab/Modeling.vue'
import Experiment from '../page/lab/Experiment.vue'
import Notebook from '../page/lab/Notebook.vue'
import Result from '../page/lab/Result.vue'

//parts file
import Contribution from '../page/parts/Contribution.vue'
import Parts from '../page/parts/Parts.vue'

//team file
import Team from '../page/team/Team.vue'
import Attribution from '../page/team/Attribution.vue'

const routes = [
      //主页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    
      //hp
      {
        path: '/human-practices',
        name: 'HP',
        component: hp
      },
      {
        path: '/collaborations',
        name: 'Collaborations',
        component: Collaborations
      },
      {
        path: '/education',
        name: 'Education',
        component: Education
      },

      //project
      {
        path:'/description',
        name:'Description',
        component:Description
      },
      {
        path:'/design',
        name:'Design',
        component:Design
      },
      {
        path:'/engineering',
        name:'Engineering',
        component:Engineering
      },
      {
        path:'/safety',
        name:'Safety',
        component:Safety
      },
      {
        path:'/award',
        name:'Award',
        component:Award
      },

      
      //lab
      {
        path:'/model',
        name:'Modeling',
        component:Modeling
      },
      {
        path:'/experiment',
        name:'Experiment',
        component:Experiment
      },
      {
        path:'/notebook',
        name:'Notebook',
        component:Notebook
      },
      {
        path:'/result',
        name:'Result',
        component:Result
      },

      //parts
      {
        path:'/contribution',
        name:'Contribution',
        component:Contribution
      },
      {
        path:'/parts',
        name:'Parts',
        component:Parts
      },

      //team
      {
        path:'/attributions',
        name:'Attribution',
        component:Attribution
      },
      {
        path:'/team',
        name:'Team',
        component:Team
      },
  ]
  export default routes