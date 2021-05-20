import {trigger} from '@angular/animations';
import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  ActionType,
  CollapseState,
  collapseVariableHeight,
  DialogService,
  IWidgetHomeTabItem,
  PersistentStore,
  PersistentStoreFactory,
  ProcessAction,
  RobotService,
  rotate180Animation,
  rotate360Animation,
  RotateState,
  TabLabel,
  WIDGET_ID,
  WidgetAppState,
  WidgetHomeTabService,
} from '@uipath/widget.sdk';

import {HttpClient} from '@angular/common/http';


const results = {
  "results": [
    {
      "title": "Find Recently Modified File in a Directory",
      "summary": "A custom activity that retrieves the most recently modified file in a folder",
      "url": "https://marketplace.uipath.com//listings/find-recently-modified-file-in-a-directory",
      "certification": "Bronze Certified",
      "downloads": "198.9k"
    },
    {
      "title": "Execute Oracle Database Query Error",
      "ques": "Hi, \n\nI'm executing a query on Oracle DB using execute Query activity. But I encountered an error while executing the sql statement. The slash symbol(/) is a must inside the sql statement. Can anyone suggest me a workaround on this. Thanks.\n\nMy error as below:\n\nExecute Query: ORA-06550: line 13, column 1:\nPLS-00103: Encountered the symbol \"/\" The symbol \"/\" was ignored.",
      "url": "https://forum.uipath.com/t/220317",
      "date": "2020-05-06T05:55:59.978Z",
      "category": "Studio",
      "ans": "hi @jenkim,,\n\nI have found the below article on the same issue. Please have  a look\n\nhttps://stackoverflow.com/questions/25883103/error14-1-pls-00103-encountered-the-symbol \n\n*--*\n*Mukesh*"
    },
    {
      "title": "Help running a Query in Oracle DB",
      "ques": "I'm facing the following scenario:\nI'm trying to make a database connection in Oracle to execute a query to a table.\nI made the connection successfully to the DB, but when I try to execute the query it shows the following message: \"ERROR [42S02] [Oracle][ODBC][Ora]ORA-00942: table or view does not exist\"\nI'm also attaching a image of my activity setup.\n\n![Image%20of%20Execute%20Query|690x344](upload://hjuepi5tvTtYkBa1z1lAruExhzu.jpeg) \n\nThanks in advance for the advice.\n\nCesar",
      "url": "https://forum.uipath.com/t/77413",
      "date": "2018-11-20T19:47:02.170Z",
      "category": "Help",
      "ans": "Is the table or view exists in the master database?\nIf not explicitly mention the database name in the select query like below -\n\n`Select * from SourceDB.dbo.SourceTable`\n\nRegards,\nKarthik Byggari"
    },
    {
      "title": "拡張機能について",
      "ques": "Oracle Formsの操作が必要となるため、Java拡張機能をインストールしました。\nRobotは別端末にインストールして実行するのですが、拡張機能はRobot側にもインストールする必要があるのでしょうか。\n\nRobot実行した際に、Oracle Formsの操作画面で「このセレクター画面に対するUI要素が見つかりません」とエラーになります。",
      "url": "https://forum.uipath.com/t/231371",
      "date": "2020-06-16T04:40:46.099Z",
      "category": "フォーラム",
      "ans": "作業備忘禄\n\nhttps://docs.uipath.com/studio/lang-ja/docs/about-the-setupextensions-tool\nhttps://docs.uipath.com/studio/lang-ja/docs/about-the-screenscrapejavasupport-tool\n\nhttps://docs.uipath.com/studio/lang-ja/v2018.2/docs/java-extension"
    },
    {
      "title": "Unable to connect Oracle DB - throws an error Attempt to load Oracle client libraries threw BadImageFormatException",
      "ques": "Hi \n\nI am trying to connect Oracle DB using the UiPath Database connect activity.\n\n**Connection String:** \n_\"Data Source=(DESCRIPTION =(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = hostname)(PORT = portnumber)))(CONNECT_DATA = (SERVICE = SERVICEName)(SERVER = DEDICATED)));uid=userid;Pwd=password\"_\n\n**Provider name:**\"_System.Data.OracleClient_\".\n\nIt throws an error with the message:\n_Attempt to load Oracle client libraries threw BadImageFormatException.  This problem will occur when running in 64 bit mode with the 32 bit Oracle client components installed._\n\nPlease find attached the complete log. \n\nAble to connect the database using Oracle SQL Developer and I installed Oracle 11g 64 bit client software and placed the TNSNAMES.ORA file.\n\nKindly advice to fix this issue.\n\nComplete Log:\nException Type: InvalidOperationException\n\nSystem.InvalidOperationException: Attempt to load Oracle client libraries threw BadImageFormatException.  This problem will occur when running in 64 bit mode with the 32 bit Oracle client components installed. ---> System.BadImageFormatException: An attempt was made to load a program with an incorrect format. (Exception from HRESULT: 0x8007000B)\n   at System.Data.Common.UnsafeNativeMethods.OCILobCopy2(IntPtr svchp, IntPtr errhp, IntPtr dst_locp, IntPtr src_locp, UInt64 amount, UInt64 dst_offset, UInt64 src_offset)\n   at System.Data.OracleClient.OCI.DetermineClientVersion()\n   --- End of inner exception stack trace ---\n\nServer stack trace: \n   at System.Data.OracleClient.OCI.DetermineClientVersion()\n   at System.Data.OracleClient.OracleInternalConnection.OpenOnLocalTransaction(String userName, String password, String serverName, Boolean integratedSecurity, Boolean unicode, Boolean omitOracleConnectionName)\n   at System.Data.OracleClient.OracleInternalConnection..ctor(OracleConnectionString connectionOptions)\n   at System.Data.OracleClient.OracleConnectionFactory.CreateConnection(DbConnectionOptions options, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningObject)\n   at System.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnection owningConnection, DbConnectionPool pool, DbConnectionOptions options)\n   at System.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject)\n   at System.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject)\n   at System.Data.ProviderBase.DbConnectionPool.GetConnection(DbConnection owningObject)\n   at System.Data.ProviderBase.DbConnectionFactory.GetConnection(DbConnection owningConnection)\n   at System.Data.ProviderBase.DbConnectionClosed.OpenConnection(DbConnection outerConnection, DbConnectionFactory connectionFactory)\n   at System.Data.OracleClient.OracleConnection.Open()\n   at UiPath.Database.DatabaseConnection.OpenConnection()\n   at UiPath.Database.DatabaseConnection..ctor(String connectionString, String providerName)\n   at UiPath.Database.Activities.DatabaseConnect.<>c__DisplayClass12_0.<BeginExecute>b__0()\n   at System.Runtime.Remoting.Messaging.StackBuilderSink._PrivateProcessMessage(IntPtr md, Object[] args, Object server, Object[]& outArgs)\n   at System.Runtime.Remoting.Messaging.StackBuilderSink.AsyncProcessMessage(IMessage msg, IMessageSink replySink)\n\nException rethrown at [0]: \n   at System.Runtime.Remoting.Proxies.RealProxy.EndInvokeHelper(Message reqMsg, Boolean bProxyCase)\n   at System.Runtime.Remoting.Proxies.RemotingProxy.Invoke(Object NotUsed, MessageData& msgData)\n   at System.Func`1.EndInvoke(IAsyncResult result)\n   at UiPath.Database.Activities.DatabaseConnect.EndExecute(AsyncCodeActivityContext context, IAsyncResult result)\n   at System.Activities.AsyncCodeActivity.System.Activities.IAsyncCodeActivity.FinishExecution(AsyncCodeActivityContext context, IAsyncResult result)\n   at System.Activities.AsyncCodeActivity.CompleteAsyncCodeActivityData.CompleteAsyncCodeActivityWorkItem.Execute(ActivityExecutor executor, BookmarkManager bookmarkManager)\n\nRegards,\nGanesh![Error%20Screenshot|690x179](upload://zjDTTMoy74itsaJoVe1rKbAm0Sw.jpg)",
      "url": "https://forum.uipath.com/t/28317",
      "date": "2018-04-07T13:11:41.998Z",
      "category": "Help",
      "ans": "Hi,\nI had the same problem and was able to solve it by installing the 32-bit version of the Oracle client **in addition** to the 64-bit version. I know it sounds counterintuitive, especially given the error message, but both myself and several others solved it by installing both. This thread at the Oracle forums discusses the issue: https://community.oracle.com/thread/2398475. \n\nYou can download both the 32-bit version and the 64-bit version here: http://www.oracle.com/technetwork/database/enterprise-edition/downloads/index.html. You can choose the 18c version even if your Oracle DB is 11g on premise, so just choose the last one.\n\nHope this helps,\nCheers, Kristian"
    },
    {
      "title": "System.Data.OracleClient.OracleException (0x80131938): OCI-22053: overflow error",
      "ques": "Hi,\n\nI am executing below query and when the last name value contain '-', it throws  the error **\"System.Data.OracleClient.OracleException (0x80131938): OCI-22053: overflow error\"** . If I remove the hyphen, the query executes fine. Please help to resolve this issue.\n\nQuery:\n\n\"select * from tablename where LAST_NM='Reynold-Joseph'\"\n\nComplete Error:\n\nSystem.Data.OracleClient.OracleException (0x80131938): OCI-22053: overflow error\n\n\nServer stack trace: \n   at System.Data.OracleClient.OracleException.Check(OciErrorHandle errorHandle, Int32 rc)\n   at System.Data.OracleClient.OracleNumber.ToDecimal(OciErrorHandle errorHandle, Byte[] value)\n   at System.Data.OracleClient.OracleColumn.GetDecimal(NativeBuffer_RowBuffer buffer)\n   at System.Data.OracleClient.OracleColumn.GetValue(NativeBuffer_RowBuffer buffer)\n   at System.Data.OracleClient.OracleDataReader.GetValues(Object[] values)\n   at System.Data.ProviderBase.DataReaderContainer.CommonLanguageSubsetDataReader.GetValues(Object[] values)\n   at System.Data.ProviderBase.SchemaMapping.LoadDataRow()\n   at System.Data.Common.DataAdapter.FillLoadDataRow(SchemaMapping mapping)\n   at System.Data.Common.DataAdapter.FillFromReader(DataSet dataset, DataTable datatable, String srcTable, DataReaderContainer dataReader, Int32 startRecord, Int32 maxRecords, DataColumn parentChapterColumn, Object parentChapterValue)\n   at System.Data.Common.DataAdapter.Fill(DataTable[] dataTables, IDataReader dataReader, Int32 startRecord, Int32 maxRecords)\n   at System.Data.Common.LoadAdapter.FillFromReader(DataTable[] dataTables, IDataReader dataReader, Int32 startRecord, Int32 maxRecords)\n   at System.Data.DataTable.Load(IDataReader reader, LoadOption loadOption, FillErrorEventHandler errorHandler)\n   at UiPath.Database.DatabaseConnection.ExecuteQuery(String sql, Dictionary`2 parameters, Int32 commandTimeout, CommandType commandType)\n   at UiPath.Database.Activities.ExecuteQuery.<>c__DisplayClass38_0.<BeginExecute>b__0()\n   at System.Runtime.Remoting.Messaging.StackBuilderSink._PrivateProcessMessage(IntPtr md, Object[] args, Object server, Object[]& outArgs)\n   at System.Runtime.Remoting.Messaging.StackBuilderSink.AsyncProcessMessage(IMessage msg, IMessageSink replySink)\n\nException rethrown at [0]: \n   at UiPath.Database.Activities.ExecuteQuery.EndExecute(AsyncCodeActivityContext context, IAsyncResult result)\n   at System.Activities.AsyncCodeActivity.System.Activities.IAsyncCodeActivity.FinishExecution(AsyncCodeActivityContext context, IAsyncResult result)\n   at System.Activities.AsyncCodeActivity.CompleteAsyncCodeActivityData.CompleteAsyncCodeActivityWorkItem.Execute(ActivityExecutor executor, BookmarkManager bookmarkManager)\n\nThanks,\nNikitha",
      "url": "https://forum.uipath.com/t/107625",
      "date": "2019-04-04T11:09:02.160Z",
      "category": "Help",
      "ans": "[quote=\"NewUser, post:1, topic:107625\"]\nSystem.Data.OracleClient.OracleException (0x80131938): OCI-22053: overflow error\n[/quote]\n\nDoes you table contain any Numeric/Decimal column? If yes then please try the below:-\n\nInstead of using select * from tablename\n\nYou can specify the precision that you require in round().\n\nSelect round(fieldname,2) as fieldname from tablename\n\nFor more info please go through the following link:- https://stackoverflow.com/questions/7688645/getting-overflow-error-when-executing-pl-sql-query"
    },
    {
      "title": "Connection to Oracle",
      "ques": "Hello!\nSomeone could explain to me how to make a connection to Oracle step by step. I tried it by all means and I have not had any result\n\n\nthank you very much",
      "url": "https://forum.uipath.com/t/18209",
      "date": "2017-12-23T05:24:33.928Z",
      "category": "Help",
      "ans": "@Daniel_Rodriguez May be you had found solution but connecting to Oracle is a critical task which took me 3 days to solve different kind of issues with different situation, so that I posted here (on your topic) may be it could help someone later.\n\nPlease noted that, until July of 2018, UiPath has only version 32bit, so that you need oracle **InstantClient for 32 bit**, not 64 bit.\n\nFor uipath, there are **2 ways** to connect to oracle DB\n(1) using Microsoft ODBC\n(2) using oracle client\n\nMethod (1) Microsoft ODBC: works; up to Windows 8. For windows server 2012 and windows server 2016, you need method (2). Because (1) has been deprecated.\n\n**More detail on method (1) using Microsoft ODBC**\n\n- (*) In order to install Oracle Instant Client, please follow this guide: http://www.interfaceware.com/manual/oracle_instant_client.html\n- (**) Setting up ODBC datasource for oracle: [http://www.interfaceware.com/manual/odbc_oracle.html](http://www.interfaceware.com/manual/odbc_oracle.html)\n\n**NOTE:** for windows 64 bit, if you follow these steps _From Windows, click Start, then select Settings, Control Panel, Administrative Tools and Data Sources (ODBC)_, by default, it will open version for 64 bit. You **MUST open 32 bit**. In order to do that, please use this file:\n\n\tC:\\Windows\\SysWOW64\\odbcad32.exe\n\nFrom that forward, you can create ODBC and ready for using UiPath to connect to it.\n\nWithin UiPath, you need to install database package (if you had not installed it), so that you have activity namely: UiPath.Database.Activites.DatabaseConnect\n\nConfigure that Activity with below information:\n\n**Connection String**: \"Driver={Microsoft ODBC for Oracle};Server=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=x.x.x.x)(PORT=1521))(CONNECT_DATA=(SID=YOUR_SID)));Uid=USERID;Pwd=PASSWORD;\"\n\n**Provider Name**: \"**System.Data.Odbc**\"\n\n**More detail on method (2) using OracleClient**\n\nI MUST use method (2) because ODBC does not work on windows server 2012 and windows server 2016\n\n- Follow guideline at (*) to install InstantClient\n\n- Open Uipath and use this activity: UiPath.Database.Activites.DatabaseConnect\n-  Configuration Detail\n  **Connection String:** \"Server=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=x.x.x.x)(PORT=1521))(CONNECT_DATA=(SID=YOUR_SID)));Uid=USERID;Pwd=PASSWORD;\"\n  **Provider Name:** \"System.Data.OracleClient\"\n\n\n**More information and troubleshoot**:\nIf after ( * ), and ( ** ) things does not work; in my case, I had installed more than (*) mentioned. Totally, I installed 3 packages:\n\n-  instantclient-basic\n-  instantclient-odbc\n-  instantclient-sdk\n\nWith Method (2)\n+ Becareful with version of instantclient, because with version 12 (e.g: 12.1.0.2.0 ...) Method (1) works well on Oracle version 10 upward but it does not work for oracle version 9\n+ Oracle version 9 requires you to use InstanceClient version 11 (e.g: 11.1.0.7.0 ). I had used InstantClient version 11.1.0.7.0  for both Oracle DB version 9, and version 10\n\nWith Method (2)\n+ I did not create tnsnames.ora and and sqlnet.ora but it still works\n\nWith Method (1)\n+ It works on windows 7, windows 8 but not work on windows server 2012, and windows server 2016\n+ I had created tnsnames.ora and sqlnet.ora. But I'm not sure whether it is required or not.\n\nWith Visual Studio Redistributable:\n+ You can install multiple versions on the same computer, they can coexist without any problem.\n+ You have to install companion version of Visual Studio Redistributable for each InstantClient in order for it to work.\n\nWith connection checking:\n+ Prepare your self another tool, like SQLDeveloper, for testing connectivity from your PC to oracle DB before configure with UiPath. Just to ensure that you can connect successful.\n\nOne last thing:\nBe careful about connection string in 2 cases; case (2) does not have Driver within it.\n\nMore reference for issue of ODBC on windows server 2012, 2016:\nhttps://social.msdn.microsoft.com/Forums/vstudio/en-US/6b79325e-dee5-4a55-9a1c-e5c01938fd86/oracle-c-connection?forum=csharpgeneral\n\nhttps://support.microsoft.com/en-us/help/822841/fix-setting-of-connection-attribute-fails-when-you-use-connection-pool\n\n[https://stackoverflow.com/questions/29532949/error-while-connecting-to-oracle-database-in-windows-server-2012](https://stackoverflow.com/questions/29532949/error-while-connecting-to-oracle-database-in-windows-server-2012)"
    },
    {
      "title": "Unable to use password from orchestrator asset into database connection string",
      "ques": "I am tryng to connect to Oracle database using OLEDB. In the connection string, i am providing the <SecureStringVariable>.ToString but it throws an error \"Logon failure: unknown user name or bad password\". How do I get around it? If I use the native GetPassword activity, it clears out once I publish the code. So cant use that too. Please help..!",
      "url": "https://forum.uipath.com/t/52194",
      "date": "2018-07-13T18:58:22.128Z",
      "category": "Help",
      "ans": "GetPassword activity returns a SecureString, but the Connection String field only accepts Strings, so you have to convert the SecureString to String\n\nhttps://forum.uipath.com/t/convert-securestring-to-string-get-secured-credential/1704"
    },
    {
      "title": "Select query on Oracle using ODBC",
      "ques": "I am trying to retrieve the data from the Oracle DB using a select query. I have inserted two rows into the table manually. When I tried using a select query on the same, the number of rows that are retrieved is zero. \n\nBelow is the simple query that I am using to retrieve the data:\n\n\"Select * from <Table_Name>\"\n\nNeed some suggestions on the same.(Urgent)",
      "url": "https://forum.uipath.com/t/42339",
      "date": "2018-07-03T06:41:05.488Z",
      "category": "Help",
      "ans": "Check if you are pointing to correct database, or you can include\n\nUSE yourDataBaseName\nGo\nSelect * from tablename"
    },
    {
      "title": "Extension for Firefox",
      "url": "https://docs.uipath.com/installation-and-upgrade/docs/studio-extension-for-firefox#install-the-extension-for-firefox",
      "summary": "Requires Mozilla Firefox version 52.0 or above to perform browser automations. Firefox versions 65.0 and lower require an extra add-on.From UiPath Studio\nAccess the Tools tab from the Studio Backstage view. The extensions you can install become visible.\nClick the Firefox button. Mozilla Firefox opens up and a confirmation pop-up is displayed.\nClick the Add button, and then OK to confirm. The UiPath Extension for Firefox is now installed.\nFrom the Command Prompt\nClick the Windows Start button and type cmd in the search field. \nRight click on Command Prompt and run it as administrator.\nChange the directory to the UiPath installation folder (cd C:\\Program Files\\UiPath\\Studio\\UiPath).\nUse the SetupExtensions /Firefox command to install the extension. Firefox opens up and a confirmation pop-up is displayed.\n\nClick the Add button, and then OK to confirm. The UiPath Extension for Firefox is now installed.\n"
    },
    {
      "title": "Uipath Database connect Activity with Oracle",
      "ques": "Hi,\n\nI'm using UiPath Studio 2018.4.3 version. I'm trying to connect bot with Oracle Database.\n\nI was able to configure ODBC driver on Windows machine and test successfully.\n\nBut I have below error when trying to use from UiPath.\n\nCan someone please help. \n\n![image|690x401](upload://u642E3OIXtJ0s36ra9dO7CIlBOz.png) \n\n(upload://5gHPYhYuBOUML6TfoKkdiyEfKMo.jpeg) z.png)",
      "url": "https://forum.uipath.com/t/121276",
      "date": "2019-05-30T20:48:05.406Z",
      "category": "Help",
      "ans": "I got it resolved after installing oracle 32 bit client on my machine. \n\nThis error generally occurs if you are using the 64 bit Oracle client. As **UiPath is a 32 bit application**, this issue is occurring. Please make sure that you have 32 bit oracle client installed. Please visit the below links for more insights-\n\nhttps://stackoverflow.com/questions/9002560/oracle-client-and-networking-components-were-not-found\nhttps://superuser.com/questions/939752/microsoft-odbc-driver-cant-find-oracle-instant-client"
    }
  ],
  "qa": {
    "answer": "OLEDB",
    "confidence": 0.07600714266300201,
    "start": 126,
    "end": 131,
    "url": "https://forum.uipath.com/t/52194",
    "context": "Unable to use password from orchestrator asset into database connection string\nI am tryng to connect to Oracle database using OLEDB. In the connection string, i am providing the <SecureStringVariable>.ToString but it throws an error \"Logon failure: unknown user name or bad password\". How do I get around it? If I use the native GetPassword activity, it clears out once I publish the code. So cant use that too. Please help..!\nGetPassword activity returns a SecureString, but the Connection String field only accepts Strings, so you have to convert the SecureString to String\n\nhttps://forum.uipath.com/t/convert-securestring-to-string-get-secured-credential/1704"
  }
}

@Component({
  selector: 'sample-widget',
  templateUrl: './sample-widget.component.html',
  styleUrls: ['./sample-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapse', collapseVariableHeight()),
    trigger('rotate180', rotate180Animation()),
    trigger('rotate360', rotate360Animation()),
  ],
  encapsulation: ViewEncapsulation.None,
})

export class SampleWidgetComponent {
  title = 'delphi';
  resultTypes = ["MarketPlace", "Forum", "Docs"]
  queries = [];

  getType(result: any) {
    if (!!result.ques) {
      return "forum";
    }
    if (!!result.downloads || !!result.certification) {
      return "marketplace";
    }
    return "docs";
  }

  results: any;

  navigate(link: string) {
    window.open(link);
  }

  feedback(result: string) {
  }

  getMessageSplitted(src: string) {
    return src.split("\n");
  }

  public query = "";
  private host = "http://52.232.104.25:8896/";
  loaded: boolean = true;

  public include_forum = false;
  public include_marketplace = false;
  public include_docs = false;

  constructor(
    @Inject(WIDGET_ID)
    private widgetId: string,
    private http: HttpClient,
    private ref: ChangeDetectorRef
  ) {
  }

  onKeyDown() {
    this.queries.unshift(this.query);
    this.onSearch(this.query)
  }

  clear() {
    this.query = "";
    this.loaded = true;
  }

  toggle(key: string) {
    switch (key) {
      case 'docs': this.include_docs = !this.include_docs; break;
      case 'marketplace': this.include_marketplace = !this.include_marketplace; break;
      case 'forum': this.include_forum = !this.include_forum; break;
    }
  }

  onSearch(query: string) {
    this.loaded = false;
    let params = {};
    if (
      this.include_marketplace === true ||
      this.include_forum === true ||
      this.include_docs === true
    ) {
      params = {
        include_forum: `${this.include_forum}`,
        include_marketplace: `${this.include_marketplace}`,
        include_docs: `${this.include_docs}`,
      };
    }
    this.http.get(this.host + query, {
      params
    }).subscribe((response) => {
      if(!this.loaded) {
        this.loaded = true;
        this.results = response;
        this.ref.detectChanges();
      }
    });
  }
}
