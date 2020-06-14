import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import
{
  Button,
  Message,
  Loading,
  Notification,
  MessageBox,
  Radio
} from 'element-ui'
Vue.use(Button)
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox);
Vue.use(Loading)
Vue.use(Notification)
Vue.use(Radio)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$notify = Notification



