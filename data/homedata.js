const URL = "http://192.168.8.110:8080"

var homedata = [
  [ //导航栏第一栏数据
    {
      NavIcon: "/images/icons/icons2/后端.png",
      NavItemName: "后端开发",
      jumpsrc:"/pages/allclasses/allclasses"
    },
    {
      NavIcon: "/images/icons/icons2/前端.png",
      NavItemName: "前端开发",
      jumpsrc:"/pages/allclasses/allclasses"
    },
    {
      NavIcon: "/images/icons/icons2/手机.png",
      NavItemName: "移动开发",
      jumpsrc:"/pages/allclasses/allclasses"
    },
    {
      NavIcon: "/images/icons/icons2/游戏.png",
      NavItemName: "游戏开发",
      jumpsrc:"/pages/allclasses/allclasses"
    }
  ],
  [ //导航栏第二栏数据
    {
      NavIcon: "/images/icons/icons2/c++语言.png",
      NavItemName: "C++",
      jumpsrc:"/pages/test/test?cc=C++" 
    },
    {
      NavIcon: "/images/icons/icons2/JAVA开发.png",
      NavItemName: "Java",
      jumpsrc:"/pages/test/test?cc=Java"
    },
    {
      NavIcon: "/images/icons/icons2/SQL语言.png",
      NavItemName: "sql",
      jumpsrc:"/pages/test/test?cc=sql"
    },
    {
      NavIcon: "/images/icons/icons2/Go语言.png",
      NavItemName: "Go",
      jumpsrc:"/pages/test/test?cc=go语言"
    }
  ],
  [ //课程数据
    {
      classid: "0",
      headimgsrc: URL +  "/images/img/数据结构/mp4.png",
      title: "数据结构与算法分析",
      cate: "数据结构",
      teacher: "李老师",
      peoplenum: "333",
      price: "100",
      detailinfo: "数据结构（英语：data structure）是计算机中存储、组织数据的方式。数据结构是一种具有一定逻辑关系，在计算机中应用某种存储结构，并且封装了相应操作的数据元素集合。它包含三方面的内容，逻辑关系、存储关系及操作。不同种类的数据结构适合于不同种类的应用，而部分甚至专门用于特定的作业任务。例如，计算机网络依赖于路由表运作，B 树高度适用于数据库的封装。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },

      ]
    },
    {
      classid: "1",
      headimgsrc: URL +  "/images/img/大学物理/mp4.png",
      title: "深入理解计算机系统",
      cate: "计算机基础",
      teacher: "吴老师",
      peoplenum: "133",
      price: "300",
      detailinfo: "深入理解计算机系统 是我读过的最优秀的计算机系统导论型作品，它创造性的把操作系统，计算机组成结构，数字电路，以及编译原理这些计算机基础学科中的核心概念汇集在一起。 从而覆盖了指令集体系架构，汇编语言，代码优化，计算机存储体系架构，链接，装载，进程，以及虚拟内存这些程序员所需了解的关键计算机系统知识。",
      menu: [{ //
        chaptername: "计算机系统漫游",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "机器级代码",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "是的是的",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },

      ]
    },
    {
      classid: "2",
      headimgsrc: URL +  "/images/img/Python/mp4.png",
      title: "python数据分析",
      cate: "pytho",
      teacher: "张老师",
      peoplenum: "743",
      price: "500",
      detailinfo: "首先导入要使用的科学计算包numpy,pandas,可视化matplotlib,seaborn,以及机器学习包sklearn。 然后导入数据，并进行初步的观察，这些观察包括了解数据特征的缺失值，异常值，以及大概的描述性统计。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },

      ]
    },
    {
      classid: "3",
      headimgsrc: URL +  "/images/img/java/mp4.png",
      title: "java web运用",
      cate: "Java",
      teacher: "康老师",
      peoplenum: "733",
      price: "600",
      detailinfo: "Java Web，是用Java技术来解决相关web互联网领域的技术栈。web包括：web服务端和web客户端两部分。Java在客户端的应用有Java Applet，不过使用得很少，Java在服务器端的应用非常的丰富，比如Servlet，JSP、第三方框架等等。Java技术对Web领域的发展注入了强大的动力。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      ]
    },
    {
      classid: "4",
      headimgsrc: URL +  "/images/img/高等数学/mp4.png",
      title: "unity游戏开发",
      cate: "unity",
      teacher: "李老师",
      peoplenum: "833",
      price: "200",
      detailinfo: "Unity 是由Unity Technologies研发的跨平台2D/3D 遊戲引擎 ，可用於開發 Windows 、 MacOS 及 Linux 平台的 單機遊戲 ， PlayStation 、 Xbox 、 Wii 、 任天堂3DS 和 Switch 等 游戏主机 平台的 视频游戏 ，以及 iOS 、 Android 等移动设备的遊戲。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },

      ]
    },
    {
      classid: "5",
      headimgsrc: URL +  "/images/img/vue.js/mp4.png",
      title: "前端vue框架学习",
      cate: "vue",
      teacher: "洪老师",
      peoplenum: "833",
      price: "300",
      detailinfo: "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      ]
    },
    {
      classid: "6",
      headimgsrc: URL +  "/images/img/java/mp4.png",
      title: "Java基础入门",
      cate: "Java",
      teacher: "马老师",
      peoplenum: "833",
      price: "300",
      detailinfo: "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。",
      menu: [{ //
        chaptername: "数组",
        kids: [{
          name: "位运算",
        },
        {
          name: "巴拉巴拉",
        }
        ]
      },
      { //
        chaptername: "栈",
        kids: [{
          name: "过程实现",
        },
        {
          name: "很多很多很多",
        }
        ]
      },
      { //
        chaptername: "队列",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "链表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "树",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "散列表",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "堆",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },
      { //
        chaptername: "图",
        kids: [{
          name: "二叉树",
        },
        {
          name: "b树",
        }
        ]
      },

      ]
    }
  ]
]

export {
  homedata
}