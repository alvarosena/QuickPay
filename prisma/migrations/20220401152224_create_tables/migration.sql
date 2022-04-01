-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "retailers" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "retailers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_cnpj_key" ON "users"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "retailers_cpf_key" ON "retailers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "retailers_cnpj_key" ON "retailers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "retailers_email_key" ON "retailers"("email");
