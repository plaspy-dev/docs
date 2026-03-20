---
slug: /xexun/tk_201/configuration
id: tk_201-configuration
sidebar_label: Configuration
title: Xexun - TK-201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xexun TK-201 y reportar a Plaspy mediante servidor compartido, SMS o comandos GPRS
keywords:
  - Configuración Xexun TK-201
  - Instalación Xexun TK-201
  - Configuración servidor TK-201
  - TK-201 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador personal
  - Configuración SMS TK-201
  - Ajustes GPRS
  - Ajustes APN
---

# Xexun - TK-201 Configuración

Esta página documenta el contexto público de configuración para usar el Xexun TK-201 con Plaspy. Se centra en los pasos y comandos prácticos y orientados al usuario que preparan el dispositivo para reportar ubicación y estado a la plataforma Plaspy. Cuando los comandos del fabricante son públicos, incluimos los comandos SMS en esta guía para ayudarle a apuntar el rastreador a Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El TK-201 admite configuración por SMS y ajustes GPRS, por lo que esta página incluye los comandos SMS habituales y el flujo de trabajo para registrar el dispositivo en Plaspy.

## Visión general de la configuración

Este proceso prepara un TK-201 para comunicarse con Plaspy y asegura que el dispositivo sea visible y reporte correctamente en la plataforma. Los pasos incluyen configurar detalles de acceso a la red, apuntar el rastreador a los ajustes del servidor Plaspy y validar que el dispositivo envía actualizaciones.

- Configure el APN y la conexión GPRS del dispositivo para que el rastreador use datos móviles y llegue a Plaspy.
- Establezca la dirección del servidor GPRS a Plaspy para que el dispositivo reporte ubicación a la plataforma.
- Seleccione el protocolo de transporte si es necesario y asegúrese de usar el puerto compartido de Plaspy.
- Verifique el envío de reportes y confirme que el rastreador aparece en Plaspy después de la configuración.
- Use comandos SMS o la herramienta del fabricante, según lo disponible, para aplicar los ajustes y reiniciar el dispositivo.

## Ajustes del servidor de Plaspy

- Punto de solicitud de dominio del servidor d.plaspy.com para configuración basada en DNS.
- Dirección IP del servidor 54.85.159.138 como opción de conexión directa.
- Puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor.

## Requisitos antes de comenzar

- Un dispositivo TK-201 cargado y accesible, con batería operativa y capacidad para recibir SMS.
- Una tarjeta SIM válida con plan de datos activo y capacidad de SMS instalada en el rastreador para configurar APN y GPRS.
- La contraseña del dispositivo o PIN de administrador para los comandos de configuración; el ejemplo de contraseña por defecto que aparece en esta guía es 123456.
- Valores de APN, nombre de usuario APN y contraseña APN del operador móvil si son necesarios.
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración para enviar comandos SMS al dispositivo.
- Una forma de monitorear o validar el dispositivo en Plaspy después de la configuración, por ejemplo una cuenta Plaspy y la lista de dispositivos.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK-201 se establece para reportar datos de ubicación al endpoint y puerto compartidos de Plaspy. El rastreador usa datos GPRS para enviar su posición y estado, mientras que el SMS sigue siendo útil para la configuración por comandos y notificaciones de emergencia.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 para que los datos se enruten a Plaspy.
- Todos los dispositivos usan el puerto 8888 en Plaspy, por lo que solo necesita configurar ese único puerto para los rastreadores compatibles.
- El rastreador puede usar UDP o TCP en el puerto 8888 según las opciones del equipo y el entorno de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, lo que simplifica la puesta en marcha en la plataforma.
- El SMS puede usarse para enviar comandos de configuración, realizar reinicios o solicitar ubicaciones inmediatas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Xexun para el TK-201, normalmente a través de comandos SMS o la herramienta del fabricante.
2. Prepare los detalles de red, incluyendo APN, nombre de usuario APN y contraseña APN proporcionados por el operador móvil.
3. Ingrese el servidor de Plaspy como d.plaspy.com o como la IP directa 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888, que es el puerto en el que Plaspy escucha para todos los dispositivos.
5. Seleccione UDP o TCP si el dispositivo requiere elección de transporte.
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si es necesario.
7. Valide que el dispositivo informa a Plaspy y que aparece en la lista de dispositivos de la plataforma.

## Ejemplos de comandos de configuración

El TK-201 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos son ejemplos públicos. La contraseña de ejemplo usada en estos comandos es 123456, que se muestra como valor por defecto en este ejemplo. El comando de restablecimiento es opcional y se utiliza normalmente solo cuando necesita restaurar la configuración de fábrica antes de aplicar una nueva configuración.

1. Restaurar configuración de fábrica (reinicio inicial opcional)
```text
begin123456
```

2. Establecer el APN del operador
```text
apn123456 [apn]
```
- El marcador [apn] debe reemplazarse por la cadena APN de su operador móvil.

3. Establecer el nombre de usuario APN (si se requiere)
```text
apnuser123456 [apnu]
```
- El marcador [apnu] debe reemplazarse por el nombre de usuario APN si su operador lo requiere.

4. Establecer la contraseña APN (si se requiere)
```text
apnpasswd123456 [apnp]
```
- El marcador [apnp] debe reemplazarse por la contraseña APN si el operador la exige.

5. Establecer el servidor GPRS a Plaspy por IP y puerto
```text
adminip123456 54.85.159.138 8888
```
- Este comando configura el rastreador para que reporte a la IP del servidor Plaspy y al puerto 8888.

6. Establecer el modo GPRS
```text
gprsmode123456
```
- Use este comando según la documentación del fabricante para activar el modo GPRS; el comportamiento exacto puede variar según el firmware.

7. Establecer el intervalo de reporte a 60 segundos
```text
t060s***n123456
```
- Este ejemplo ajusta el intervalo de actualizaciones; consulte la documentación del fabricante para el formato exacto de intervalos y los límites soportados.

Nota: Si prefiere usar el endpoint DNS en lugar de la IP, reemplace el comando adminip por el comando correspondiente del fabricante que acepte un valor de dominio, o use la herramienta del fabricante para ingresar d.plaspy.com si está soportado.

## Notas sobre la configuración

- La configuración por SMS es de uso habitual en los dispositivos TK-201; confirme la sintaxis exacta de los comandos con la documentación del equipo o el proveedor, ya que el firmware puede cambiar el formato de los comandos.
- El dispositivo puede aceptar el servidor Plaspy por dominio d.plaspy.com o por la IP directa 54.85.159.138; use el método que su firmware soporte.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que no necesita un puerto distinto por cada rastreador.
- Seleccione UDP o TCP en función de las opciones del equipo y la fiabilidad de la red; algunos operadores y entornos prefieren un transporte sobre el otro.
- Mantenga la contraseña del dispositivo segura y actualícela después de la configuración inicial si el flujo de trabajo del fabricante permite cambiar la contraseña.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun TK-201 para reportar a Plaspy ofrece una forma sencilla de obtener visibilidad en tiempo real y seguimiento histórico en una plataforma centralizada. Para organizaciones o personas que rastrean personas, mascotas o bienes personales, la combinación de configuración por SMS y reporte GPRS a Plaspy permite una instalación remota y un flujo de datos constante hacia la plataforma.

Para obtener más información sobre Plaspy e integración de dispositivos compatibles visite https://www.plaspy.com. Las especificaciones del fabricante y la sintaxis de comandos pueden cambiar con el tiempo, por lo que verifique los detalles de configuración específicos del dispositivo y el comportamiento del firmware en el sitio oficial de Xexun https://www.xexun.com/ antes de realizar despliegues a gran escala.
