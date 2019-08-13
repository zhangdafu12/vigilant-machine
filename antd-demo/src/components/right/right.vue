<template>
    <div id="right">
        <div class="right_nav">
            <ul class="navigation">
                <li :class="nav==0 ? 'active':''" @click="uploadDate">上传文件</li>
                <li :class="nav==1 ? 'active':''" @click="uploadEstablish">新建文件夹</li>
                <li :class="nav==2  ? 'active':''" @click="download">下载文件</li>
                <li :class="nav==3  ? 'active':''" @click="transfer">传输列表</li>
            </ul>
        </div>
        <!--实际内容-->
        <div class="right_cont">
            <div v-show="nav!=3" class="file_box" @contextmenu.prevent="contextmenu($event,val.fileType,val.name)"
                 @dblclick="folderDetails(val.fileType)" v-for="(val,index) in folderlist" :key="index">
                <img class="file_icon" v-if="val.fileType=='folder'" src="../../assets/images/folder.png" alt="11">
                <img class="file_icon" v-else-if="val.fileType=='panel'" :class="val.fileType=='folder'? '':'nofolder'"
                     src="../../assets/images/panel.png" alt="11">
                <img class="file_icon" v-else-if="val.fileType=='task'" :class="val.fileType=='folder'? '':'nofolder'"
                     src="../../assets/images/task.png" alt="11">
                <img class="file_icon" v-else-if="val.fileType=='time'" :class="val.fileType=='folder'? '':'nofolder'"
                     src="../../assets/images/time.png" alt="11">
                <span class="file_name">{{val.name}}</span>
                <span class="file_but" @click.stop="pitchState($event)"></span>
            </div>
            <div v-show="nav==3" class="list-cont">
                <div class="list">共传输102个文件<button class="btn list_btn" @click="onElect">清除记录</button><button class="btn list_btn" @click="onAll">清除全部记录</button></div>
                <table>
                    <tbody>
                    <tr v-for="(p,index) in persons" >
                        <td> <input type="checkbox" :value="index" v-model="checkedIds"></input><img src="../../assets/images/技术文档.png">{{p.type}}</td>
                        <td>{{p.omen}}</td>
                        <td>{{p.time}}</td>
                        <td>{{p.upload}}</td>
                        <td>{{p.finish}}</td>
                        <td>{{p.record}}</td>
                        <td>
                            <button class="btn clear_btn" @click="onCancel(index)">清除记录</button>
                        </td>
                        <td>
                            <img src="../../assets/images/search.png">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--        蒙版层-->
        <div class="masking" @click.stop="maskingState" v-show="masking"></div>
        <div :class="type=='share' ? 'share_file':'update'"
             v-show="masking && type=='share'||masking && type=='upFile'|| masking &&type=='establish'|| masking && type=='panel'">
            <div class="upFile" v-if="type=='upFile'">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip upload_tips">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <div class="upFile" v-else>
                <p class="establish_tit" v-show="type=='establish'">新建文件夹</p>
                <p class="establish_tit" v-show="type=='panel'">时间+地点</p>
                <p class="establish_tit" v-show="type=='share'">分享</p>
            </div>
            <div class="folder">
                <div class="folder_new" v-show="type=='upFile'">
                    <span>选择文件夹</span>
                    <span>新建文件夹</span>
                </div>
                <div class="folder_list" v-show="type=='upFile'">
                    <a-directory-tree
                            multiple
                            defaultExpandAll
                            @select="onSelect"
                            @expand="onExpand"
                    >
                        <a-tree-node title="parent 0" key="0-0">
                            <a-tree-node title="leaf 0-0" key="0-0-0" isLeaf/>
                            <a-tree-node title="leaf 0-1" key="0-0-1" isLeaf/>
                        </a-tree-node>
                        <a-tree-node title="parent 1" key="0-1">
                            <a-tree-node title="leaf 1-0" key="0-1-0" isLeaf/>
                            <a-tree-node title="leaf 1-1" key="0-1-1" isLeaf/>
                        </a-tree-node>
                    </a-directory-tree>
                </div>
                <div class="file_info" v-show="type=='establish'">
                    <label for="time">时间</label>
                    <input type="text" id="time"><br>
                    <label for="site">地点</label>
                    <input type="text" id="site"><br>
                    <label for="client">客户</label>
                    <input type="text" id="client"><br>
                    <label for="market">销售</label>
                    <input type="text" id="market"><br>
                    <label for="design">设计</label>
                    <input type="text" id="design"><br>
                </div>
                <div v-show="type=='upFile'||type=='establish'" class="fileType">
                    <p>添加标签</p>
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                                {{style.one}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                            <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                                {{style.two}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                            <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <p>自定义标签</p>
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                                {{style.three}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                            <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                                {{style.four}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                            <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <br/>
                    <div class="but">
                        <el-button type="primary">确认</el-button>
                    </div>
                </div>
                <div class="panel_cont" v-show="type=='panel'" v-for="(val,ind) in Tables" :key="ind">
                    <input class="panel_tit" @change="changeName(val.name)" type="text" v-model="val.name"
                           maxlength="8">
                    <i class="el-icon-edit el-icon--right"></i>

                    <textarea class="dining" v-model="val.member"></textarea>
                </div>
                <div class="add_table" v-show="type=='panel'">
                    <span @click="newTable"><i class="el-icon-circle-plus" style="color: #3d97ff;"></i>添加</span><br/>
                    <el-button type="primary" @click="createCode">{{code}}</el-button>
                </div>
                <div class="share_cont" v-show="type=='share'">
                    <div class="share_tit">
                        <img class="share_icon" v-if="share_type=='folder'" src="../../assets/images/folder.png" alt="11">
                        <img class="share_icon2" v-else-if="share_type=='panel'" src="../../assets/images/panel.png"
                             alt="11">
                        <img class="share_icon2" v-else-if="share_type=='task'" src="../../assets/images/task.png"
                             alt="11">
                        <img class="share_icon2" v-else-if="share_type=='time'" src="../../assets/images/time.png"
                             alt="11">
                        <span class="share_name">{{share_name}}</span>
                    </div>
                    <div class="shareing" v-if="share_link">
                        <el-form>
                        <el-form-item label="分享形式:">
                            <el-radio-group v-model="share_radio">
                                <el-radio label="公共"></el-radio>
                                <el-radio label="私密"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        </el-form>
                        <span class="share_time">有  效  期:</span>
                        <el-select v-model="share_value" placeholder="永久有效">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="share_finish" v-else>
                        <p>链   &nbsp;接:
                        <span>{{links}}</span></p>

                        <p>有效期:<span>{{share_value}}</span></p>
                        <p v-show="share_radio=='私密'">提取码:    <span>h3jr6t</span></p>
                    </div>
                    <el-button @click="shareLink()" type="primary">{{share_link ? "确认":"复制链接"}}</el-button>
                </div>
            </div>
        </div>
        <!--鼠标右击-->
        <ul class="contextmenu" :style="{'left': menuLeft, 'top': menuTop}" v-show="menuShow">
            <li>添加标签</li>
            <li>打开</li>
            <li @click="shared($event)">分享</li>
            <li>下载</li>
            <li>移动到</li>
            <li>复制到</li>
            <li>重命名</li>
            <li>删除</li>
        </ul>
    </div>
</template>

<script>
  var persons =[
    {id:0, type:"新娘.jpg",omen:"15.4M", time:"2019/06/12 14:22:01", upload:"上传人:阿星", finish:"上传完成"},
    {id:1, type:"新娘.jpg",omen:"15.4M", time:"2019/06/12 14:22:01", upload:"上传人:阿星", finish:"上传99%"},
    {id:2, type:"新娘.jpg",omen:"15.4M", time:"2019/06/12 14:22:01", upload:"上传人:阿星", finish:"上传完成"},
    {id:3, type:"新娘.jpg",omen:"15.4M", time:"2019/06/12 14:22:01", upload:"上传人:阿星", finish:"上传12%"},
  ];
  export default {
    name: 'right',
    showIcon: true,
    data() {
      return {
        nav: 0,
        persons:persons,
        checkedIds:[],
        type: "",
        code: "生成二维码",
        masking: false,
        file_but: "",
        disabled: true,
        isChange: true,
        panelName: "",
        menuShow: false,
        menuLeft: "",
        menuTop: "",
        share_type: "",
        share_name: "",
        share_link: true,
        links:"https://share.weiyun.com/5c3JBTM",
        share_radio:"",
        style: {
          one: "风格",
          two: "颜色",
          three: "自定义",
          four: "啥玩意"
        },
        folderlist: [{name: '以前的文件1', fileType: "folder"}, {name: '以前的文件1', fileType: "folder"}],
        folderlist2: [
          {name: '设计文件', fileType: "folder"},
          {name: '摄影', fileType: "folder"},
          {name: '摄像', fileType: "folder"},
          {name: '宴会名单', fileType: "panel"},
          {name: '任务管理器', fileType: "task"},
        ],
        folderCode:{name: '时间+地点', fileType: "time"},
        Tables: [{
          name: "1号桌",
          member: "刘德华  谢霆锋  王菲  王迅  黄渤  孙红雷  黄磊  张艺兴  罗志祥\n" +
            "迪丽热巴  古力拉扎\n",
        },
          {
            name: "2号桌",
            member: "刘德华  谢霆锋  王菲  王迅  黄渤  孙红雷  黄磊  张艺兴  罗志祥\n" +
              "迪丽热巴  古力拉扎\n",
          },
          {
            name: "3号桌",
            member: "刘德华  谢霆锋  王菲  王迅  黄渤  孙红雷  黄磊  张艺兴  罗志祥\n" +
              "迪丽热巴  古力拉扎\n",
          }
        ],
        options: [{
          value: '选项1',
          label: '永久有效'
        }, {
          value: '选项2',
          label: '1星期'
        }, {
          value: '选项3',
          label: '1天'
        }],
        share_value: '永久有效',
        table: {name: "", member: ""},
        panelList: [],
        taskList: [],
        timeList: [],
        mouseState: false,
        fileList: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],

        tree_Data: [
          {
            id: 1,
            label: '一级 1',
            icon: 'el-icon-success',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2',
                icon: 'el-icon-success',
              }]
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2',
              children: [{
                id: 11,
                label: '三级 3-2-1'
              }, {
                id: 12,
                label: '三级 3-2-2'
              }, {
                id: 13,
                label: '三级 3-2-3'
              }]
            }]
          }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }

      }

    },
    methods: {
      //传输
      onCancel: function (index) {
        this.persons.splice(index,1);
      },

      onElect: function () {
        var arr = [];
        var len = this.persons.length;
        for(var i=0;i<len;i++){
          if(this.checkedIds.indexOf(i)>=0){
          }else {
            arr.push(persons[i]);
          }
        }
        this.persons = arr;
        this.checkedIds = [];
      },
      onAll: function () {
        this.persons.splice(persons);
        // return []
      },
      //蒙版相关
      maskingState(){
        let _this= this;
        _this.masking = !_this.masking;
        if (!_this.share_link){
          _this.share_link=true;
        }

      },
      folderDetails(fileType) {
        let _this = this;
        if (fileType == 'folder') {
          _this.folderlist = [];
          _this.folderlist = _this.folderlist2;
        } else if (fileType == 'panel') {
          _this.masking = !_this.masking;
          _this.type = 'panel';

        }
      },

      pitchState(e) {
        let but = e.currentTarget;
        if (but.className == "file_but") {
          but.className = "file_but file_buting";
        } else {
          but.className = "file_but";
        }
      },
      uploadDate() {
        let _this = this;
        _this.masking = !_this.masking;
        _this.type = 'upFile';
        _this.nav = 0;
      },
      uploadEstablish() {
        let _this = this;
        _this.masking = !_this.masking;
        _this.type = 'establish';
        _this.nav = 1;
      },
      download() {
        let _this = this;
        _this.nav = 2;
      },
      transfer() {
        let _this = this;
        _this.nav = 3;

      },
      onSelect(keys) {
        console.log('Trigger Select', keys);
      },
      onExpand() {
        console.log('Trigger Expand');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      handleCommand(command) {
        alert('click on item ' + command);
      },
      newTable() {
        let _this = this;
        _this.table = {name: "", member: ""};
        _this.table.name = (_this.Tables.length + 1) + "号桌";
        _this.table.member = (_this.Tables.length + 1);
        _this.Tables.push(_this.table);
      },
      createCode() {
        let _this = this;
        _this.code = "刷新二维码";
        alert("生成二维码成功");
        _this.masking = !_this.masking;
        _this.folderlist2[5] = _this.folderCode;
      },
      changeName(e) {
        console.log(e, 11);
        console.log(this.Tables)
      },
      contextmenu(e, type, name) {
        let _this = this;
        console.log(e.target, 11);
        console.log(e, type);
        _this.share_type = type;
        _this.share_name = name;
        _this.menuShow = true;
        _this.menuLeft = e.clientX + 'px';
        _this.menuTop = e.clientY + 'px';
        console.log(_this.menuLeft, _this.menuTop);
      },
      handleDocClick() {
        let _this = this;
        _this.menuShow = false;
      },
      shared(e) {
        console.log(1111);
        let _this = this;
        _this.type = "share";
        _this.masking = !_this.masking;
      },
      shareLink(){
        let _this = this;
        if (!_this.share_link){
            //复制文本
          const input = document.createElement('input');
          document.body.appendChild(input);
          input.value=_this.links;
          input.select();
          if (document.execCommand("copy")) {
            document.execCommand("copy")
          }
          document.body.removeChild(input);

        }
        _this.share_link=false;
      }

    },
    mounted() {
      // document.addEventListener('contextmenu',this.handleDocContextmenu);
      document.addEventListener('click', this.handleDocClick);
    }


  }
</script>
<style scoped>
    #right {
        width: 100%;
        height: 100%;
    }

    #right .right_nav {
        width: 100%;
        height: 76px;
        padding: 20px 40px;
        border-bottom: solid 2px #efefef;
    }

    #right .right_cont {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;

    }


    #right .navigation {
        display: flex;
    }

    #right .navigation li {
        width: 90px;
        height: 32px;
        margin-right: 40px;
        border-radius: 5px;
        border: solid 1px #d9d9d9;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        color: #b4b4b4;
        background: #fff;
    }

    #right .navigation li.active {
        color: #ffffff;
        background: #3d97ff;
        border: solid 1px #3d97ff;
    }

    #right .right_cont .file_box:hover {
        background: #e1eefc;
    }

    #right .right_cont .file_box {
        width: 124px;
        height: 134px;
        padding-top: 10px;
        margin-right: 20px;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        z-index: 2;
        background: #fff;
    }


    #right .right_cont .file_icon {
        width: 84px;
        height: 70px;
    }

    #right .right_cont .nofolder {
        width: 56px;
        height: 70px;
    }

    #right .right_cont .file_name {
        height: 24px;
        font-size: 12px;
        width: 70px;
        overflow: hidden;
        text-align: center;
    }

    #right .right_cont .file_but {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
    }

    #right .right_cont .file_buting {
        background: #3d97ff;
    }

    #right .masking {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.25);
    }

    #right .update {
        width: 500px;
        height: 620px;
        border-radius: 10px;
        position: fixed;
        top: calc(50% - 300px);
        left: calc(50% - 250px);
        border: solid 1px #e0e0e0;
        background-color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 10;

    }

    #right .share_file {
        width: 800px;
        height: 400px;
        border-radius: 10px;
        position: fixed;
        top: calc(50% - 200px);
        left: calc(50% - 400px);
        border: solid 1px #e0e0e0;
        background-color: #fff;
        overflow: hidden;
        z-index: 10;
    }
    #right .share_cont button{
        margin:60px 0 0 340px;
        min-width: 80px;
    }

    #right .share_icon2 {
        width: 40px;
        height: 48px;

    }
    #right .share_finish{
        font-size: 14px;
        line-height: 36px;
        margin-top: 15px;

    }
    #right .share_finish span{
        display: inline;
        height: 36px;
        line-height: 36px;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 5px;
        background: #c8c8c8;
    }

    #right .share_icon {
        width: 40px;
        height: 33px;
    }

    #right .share_name {
        margin-left: 20px;
    }
    #right .shareing form{
margin: 0;
    }
    #right .el-select{
        width: 120px;
        height: 30px;
    }

    #right  .share_time{
        margin-right: 30px;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    #right .upFile {
        width: 100%;
        min-height: 56px;
        padding: 10px 20px;
        position: relative;
        border-bottom: solid 1px #e0e0e0;
    }

    #right .upload_tips {
        position: absolute;
        top: 10px;
        right: 60px;
    }

    #right .folder {
        width: 500px;
        height: 250px;
        padding: 10px 20px;

    }

    #right .update .file_info {
        width: 100%;
    }

    #right .update .file_info input {
        width: 170px;
        height: 36px;
        background-color: #f0f0f0;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-left: 15px;
        border: none;
    }

    #right .update .folder .folder_new {
        width: 100%;
        height: 56px;
        line-height: 56px;
        display: flex;
        justify-content: space-between;
    }

    #right .upFile .establish_tit {
        font-size: 16px;
        line-height: 20px;
    }

    #right .update .folder .folder_list {
        width: 100%;
        height: 100%;
        background: #F0F0F0;
        border-radius: 10px;
        overflow-y: auto;
    }

    #right .update .folder .folder_list i {
        color: #3d97ff;
    }

    #right .update .fileType p {
        margin: 12px 0px;
    }

    #right .el-dropdown-link {
        cursor: pointer;
        display: inline-block;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        background: #e0e0e0;
        margin-right: 20px;
    }

    #right .el-icon-arrow-down {
        font-size: 12px;
    }

    #right .fileType .but {
        width: 100%;
        height: 40px;
        background: #ffffff;
        text-align: center;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    #right .fileType .but button {
        width: 90px;
        height: 30px;
        line-height: 0px;
    }

    #right .panel_cont .panel_tit {
        width: 80px;
        height: 24px;
        border: none;
        background: #ffffff;
    }

    #right .panel_cont .dining {
        width: 450px;
        height: 69px;
        background-color: #f0f0f0;
        border-radius: 5px;
        margin: 15px 0;
    }

    #right .add_table button {
        margin: 20px 0 0 160px;
    }

    #right .contextmenu {
        margin: 0;
        background: #fff;
        width: 100px;
        z-index: 100;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .3);
        left: 0;
        top: 0;
    }

    #right .contextmenu li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
    }

    #right .contextmenu li:hover {
        background: #eee;
    }
    .list-cont button{
        margin: 0;
        padding: 0;
    }
    .list-cont{
        width: 100%;
    }
    .list-cont .list{
        width: 100%;
        height: 54px;
        background-color: #f0f0f0;
        line-height: 54px;
        padding: 0 16px;
        font-weight: 600;
        font-size: 17px;
    }
    .list-cont .btn{
        border: none;
        background: none;
        color: #5b5b5b;
        font-size: 15px;
        outline: none;

    }
    .list-cont .list_btn{
        margin-left: 20px;
    }
    .list-cont .list_btn:last-child{
        color: #3d97ff;
    }
    .list-cont .clear_btn:hover{
        color:#3d97ff;
    }
    .list-cont table,tbody{
        width: 100%;
    }
    .list-cont tr{
        height: 54px;
        line-height: 54px;
        display: flex;
        justify-content: space-between;
        border-bottom:solid 1px #e9e9e9;
        color: #9b9b9b;
        font-size: 12px;
    }
    .list-cont tr td:first-child{
        margin-left: 10px;
        color: #000;
        font-size: 14px;
    }
    .list-cont tr td:first-child img{
        width: 19px;
        height: 22px;
        margin: 0 10px;
    }


</style>
