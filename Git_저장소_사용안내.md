# Git 저장소 사용 안내

> AI 에이전트 수업(2026.06) 교육 자료 · 작성일 2026-11-15

---

## 1. 저장소란?

저장소(Repository)는 **파일과 그 파일의 모든 변경 이력을 함께 보관하는 폴더**입니다.
"언제, 누가, 무엇을, 왜 바꿨는지"가 남고, 언제든 예전 상태로 되돌릴 수 있습니다.

| 구분 | 위치 | 예시 |
|---|---|---|
| **로컬 저장소** | 내 PC 폴더 | `깃허브` 폴더 |
| **원격 저장소** | GitHub 서버 | `github.com/aaronjun74/github-test` |

두 저장소는 자동으로 맞춰지지 않습니다.
**`push`(PC → GitHub)와 `pull`(GitHub → PC)을 해야 같아집니다.**

---

## 2. 두 가지 도구

| 도구 | 하는 일 | 비유 |
|---|---|---|
| **git** | 폴더의 변경 이력을 기록하고 GitHub와 주고받습니다 | 버전 기록장 + 택배 |
| **gh** (GitHub CLI) | 로그인, 저장소 만들기 등 GitHub 사이트의 일을 명령으로 처리합니다 | GitHub 웹사이트 리모컨 |

---

## 3. 파일이 거치는 3단계

```
[작업 폴더]  --git add-->  [올릴 목록]  --git commit-->  [내 PC 이력]  --git push-->  [GitHub]
  파일 수정                  올릴 파일 선택               기록 확정                      공유
```

- 파일을 고치기만 하면 기록되지 않습니다.
- `commit`을 해야 이력이 남고, `push`를 해야 다른 사람이 볼 수 있습니다.
- 비유: `add` = 상자에 담기 · `commit` = 송장 붙이기 · `push` = 발송

---

## 4. 처음 한 번만 하는 설정

| 명령 | 뜻 |
|---|---|
| `winget install --id GitHub.cli` | GitHub CLI 설치 |
| `gh auth login --web --git-protocol https` | 브라우저로 로그인 (8자리 코드를 https://github.com/login/device 에 입력) |
| `gh auth status` | 로그인 상태 확인 |
| `git init -b main` | 폴더에서 버전 기록 시작 (숨김 폴더 `.git` 생성) |
| `gh repo create 저장소이름 --private --source . --remote origin --push` | GitHub에 저장소를 만들고 폴더와 연결한 뒤 바로 올리기 |
| `git remote -v` | 연결된 GitHub 주소 확인 |

> 저장소 이름에는 한글을 쓸 수 없습니다. 영문, 숫자, `-`, `_`만 사용합니다.

---

## 5. 상황별 명령

| 상황 | 명령 |
|---|---|
| 무엇이 바뀌었는지 보기 | `git status` |
| 바뀐 내용 자세히 보기 | `git diff` |
| 전부 올리기 | `git add .` → `git commit -m "설명"` → `git push` |
| GitHub의 최신 내용 받기 | `git pull` |
| 다른 PC에 저장소 통째로 받기 | `gh repo clone 계정/저장소` |
| 지난 기록 보기 | `git log --oneline` |
| 저장 전 수정을 취소하기 | `git restore 파일이름` |
| 예전 커밋으로 되돌리기 | `git revert 커밋번호` (기록은 남긴 채 되돌림) |

---

## 6. 브랜치: 원본을 건드리지 않고 시험하기

**브랜치**는 원본(`main`)을 복사한 작업 공간입니다.

```
git switch -c 새카탈로그시안      ← 시험용 브랜치를 만들고 이동
(수정 → add → commit)
git push -u origin 새카탈로그시안
gh pr create                     ← "원본에 합쳐 주세요" 요청(PR)
```

**직원은 브랜치에서 작업하고 → 대표는 PR을 보고 승인**합니다.
누가 무엇을 바꿨는지 기록이 남아, 업무를 맡기면서도 결과를 확인할 수 있습니다.

---

## 7. 커밋 메시지 쓰는 법

무엇을 했는지 한 줄로 씁니다.

- 좋은 예: `Ergo 루페 상세페이지 가격표 수정`, `전시회 체크리스트 추가`
- 나쁜 예: `수정`, `ㅇㅇ`, `final_최종_진짜`

---

## 8. 올리면 안 되는 파일: `.gitignore`

저장소 폴더에 `.gitignore` 파일을 만들고, 적힌 파일은 GitHub에 올라가지 않게 합니다.

```
*.xlsx
고객명단*
*.env
```

**공개 저장소는 누구나 볼 수 있습니다.**
고객 DB, 가격표, 급여, 계약 금액 같은 대외비는 절대 넣지 않습니다.

---

## 9. 주소 읽는 법

| 주소 | 용도 |
|---|---|
| `https://github.com/계정` | 프로필 |
| `https://github.com/계정/저장소` | 저장소 첫 화면 |
| `https://github.com/계정/저장소.git` | git이 파일을 주고받는 주소 (`push`, `clone`용) |
| `https://github.com/계정/저장소/blob/main/파일이름` | 파일 하나 보기 |

---

## 10. 주의할 점

| 주의 | 대응 |
|---|---|
| **Google Drive 안의 저장소** | 동기화와 Git이 동시에 파일을 건드리면 충돌할 수 있습니다. 본격적으로 쓸 저장소는 `C:\Users\사용자\GitHub\` 같은 로컬 폴더에 둡니다 |
| **두 곳에서 수정** | 작업을 시작하기 전에 항상 `git pull`부터 합니다 |
| **비공개로 바꾸기** | `gh repo edit 계정/저장소 --visibility private --accept-visibility-change-consequences` |
| **비밀 정보를 잘못 올렸을 때** | 파일을 지워도 이력에 남습니다. 즉시 비공개로 바꾸고 담당자에게 알립니다 |

---

## 11. AI 에이전트에게 이렇게 말하면 됩니다

명령을 외울 필요는 없습니다.

| 이렇게 말하면 | 이렇게 처리합니다 |
|---|---|
| "**올려줘**" | add → commit → push |
| "**최신으로 받아줘**" | pull |
| "**어제 상태로 되돌려줘**" | 기록 확인 후 revert |
| "**시험용으로 따로 작업해줘**" | 브랜치 만들기 |

---

## 한 줄 요약

> **처음 한 번:** `gh auth login` → `gh repo create`
> **매번:** `git add` → `git commit` → `git push`
> **확인:** `git status`, `gh auth status`
