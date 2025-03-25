# 使用说明

## open（开放平台）

该模式通过众趣开放平台接口获取数据，使用前请先了解[众趣开放平台](https://test-openplatform.3dnest.cn/api/docs/auth.html)

获取 appId 与 app_secret 后

在 .env.open 中配置 `VITE_QVERSE_APP_ID` 为 appId，`VITE_QVERSE_APP_SECRET` 为 app_secret

该 appId 与 app_secret 在 src/plugins/Space/DataCenter/platform/open.js 文件中使用

### 开发

```sh
# 启动开发环境
npm run dev:open

# 访问
http://localhost:5173/?work_id=作品id
```

### 打包

```sh
# 构建生产环境
npm run build:open

# 打包结果在 dist 目录中，根据需求部署
```

## offline（离线数据包）

该模式通过离线数据包获取数据

### 开发

获取离线数据包后，可在本地启动一个服务，例如：使用 `http-server`，在离线数据包文件夹中运行 `http-server --cors`

在 .env.offline 中配置 `VITE_BASE_URL` 为本地启动的服务的 ip + 端口号

例如：配置 `VITE_BASE_URL` 为 `http://127.0.0.1:8080`，通过 `http://127.0.0.1:8080/base.json` 可获取到离线数据包中的 `base.json` 文件

```sh
# 启动开发环境
npm run dev:offline

# 访问
http://localhost:5173/?work_id=作品id
```

### 打包

情况1：将打包结果复制粘贴到离线数据包中，再将数据包部署到服务器

需将 .env.offline 中 `VITE_BASE_URL_PROD` 配置为 ""（空字符串）

情况2：离线数据部署到单独服务（需包含离心数据包以作品 id 为名称的外层文件夹），前端项目通过指定地址获取数据

需将 .env.offline 中 `VITE_BASE_URL_PROD` 配置为目标服务地址

例如：配置 `VITE_BASE_URL` 为 `http://abc.com/file`，通过 `http://abc.com/file/作品id/base.json` 可获取到离线数据包中的 `base.json` 文件

```sh
# 构建生产环境
npm run build:offline

# 打包结果在 dist 目录中，根据需求部署
```

## model（模型数据包）

该模式通过模型数据包获取数据，仅加载模型

### 开发

获取模型数据包，一般其名称为 `模型名称_模型id`，将数据包解压到文件夹中，文件夹名称建议为模型 id

在文件夹外层，本地启动一个服务，例如：使用 `http-server`，在离线数据包文件夹中运行 `http-server --cors`

在 .env.model 中配置 `VITE_BASE_URL` 为本地启动的服务的 ip + 端口号

例如：配置 `VITE_BASE_URL` 为 `http://127.0.0.1:8080`，通过 `http://127.0.0.1:8080/model_id/info/model_version/raw_settings.txt` 可获取到模型数据包中的 `raw_settings.txt` 文件

注：数据包中，info 或 model 内的文件夹名称，为 model_version，它的格式是一个时间，例如 2023-06-08-00-22-01

```sh
# 启动开发环境
npm run dev:model

# 访问
http://localhost:5173/?model_id=模型id&model_version=模型version
```

### 打包

```sh
# 构建生产环境
npm run build:model

# 打包结果在 dist 目录中，根据需求部署
```
