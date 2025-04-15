# BackEnd

  1. Db연결하기
  DbContext
  사용 시 프레임워크 설치 필요_Control + , > 프래임워크 설치
  "using Microsoft.EntityFrameworkCore;"
  프로젝트 패키지에서 확인 가능
  >> <PackageReference Include="Microsoft.EntityFrameworkCore" Version="9.0.4" />

  2. NuGet 패키지 설치
  Microsoft.EntityFrameworkCore.SqlServer: 서버 연결
  Microsoft.EntityFrameworkCore.Tools: 마이그레이션

  3. 데이터 마이그레이션
  패키지 관리자 콘솔 > Add-Migration Inital > Update-Database
  