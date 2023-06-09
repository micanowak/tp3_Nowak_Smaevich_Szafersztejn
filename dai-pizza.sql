USE [master]
GO
/****** Object:  Database [dai-pizza]    Script Date: 5/5/2023 09:40:49 ******/
CREATE DATABASE [dai-pizza]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'dai-pizza', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\dai-pizza.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'dai-pizza_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\dai-pizza_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [dai-pizza] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [dai-pizza].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [dai-pizza] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [dai-pizza] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [dai-pizza] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [dai-pizza] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [dai-pizza] SET ARITHABORT OFF 
GO
ALTER DATABASE [dai-pizza] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [dai-pizza] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [dai-pizza] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [dai-pizza] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [dai-pizza] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [dai-pizza] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [dai-pizza] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [dai-pizza] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [dai-pizza] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [dai-pizza] SET  DISABLE_BROKER 
GO
ALTER DATABASE [dai-pizza] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [dai-pizza] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [dai-pizza] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [dai-pizza] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [dai-pizza] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [dai-pizza] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [dai-pizza] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [dai-pizza] SET RECOVERY FULL 
GO
ALTER DATABASE [dai-pizza] SET  MULTI_USER 
GO
ALTER DATABASE [dai-pizza] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [dai-pizza] SET DB_CHAINING OFF 
GO
ALTER DATABASE [dai-pizza] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [dai-pizza] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [dai-pizza] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'dai-pizza', N'ON'
GO
ALTER DATABASE [dai-pizza] SET QUERY_STORE = OFF
GO
USE [dai-pizza]
GO
/****** Object:  User [alumno]    Script Date: 5/5/2023 09:40:49 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[pizza]    Script Date: 5/5/2023 09:40:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pizza](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](150) NULL,
	[libreGluten] [bit] NULL,
	[importe] [float] NULL,
	[descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_pizza] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[pizza] ON 

INSERT [dbo].[pizza] ([id], [nombre], [libreGluten], [importe], [descripcion]) VALUES (1, N'muzza', 0, 2000, N'muzza muy rica')
INSERT [dbo].[pizza] ([id], [nombre], [libreGluten], [importe], [descripcion]) VALUES (2, N'fugazzeta', 0, 2300, N'queso y cebolla delicioso')
INSERT [dbo].[pizza] ([id], [nombre], [libreGluten], [importe], [descripcion]) VALUES (3, N'napo', 0, 2250, N'jamon queso tomate tremenda')
SET IDENTITY_INSERT [dbo].[pizza] OFF
GO
USE [master]
GO
ALTER DATABASE [dai-pizza] SET  READ_WRITE 
GO
