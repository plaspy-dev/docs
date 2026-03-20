---
slug: /atrack/al7/configuration
id: al7-configuration
sidebar_label: Configuration
title: ATrack - AL7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador ATrack AL7 para Plaspy y ejemplos de comandos AT
keywords:
  - Configuración ATrack AL7
  - Configuración AL7 para Plaspy
  - Configuración de servidor ATrack AL7
  - Configuración rastreador GPS AL7
  - Comandos AT ATrack AL7
  - Configuración de rastreador Plaspy
  - Ajustes de servidor GPRS AL7
  - Seguimiento de flotas AL7
  - Configuración TCP UDP AL7
  - Integración del dispositivo AL7
---

# ATrack - Configuración AL7

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AL7 con la plataforma de gestión de flotas Plaspy. Se enfoca en los ajustes prácticos del servidor y en ejemplos de secuencias de comandos AT publicados para el AL7, y explica lo que debe preparar para que el dispositivo pueda comunicarse con Plaspy. Use esta guía junto con la documentación del producto AL7 para aplicar los comandos mostrados y confirmar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos envían datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del AL7, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. Los comandos de ejemplo a continuación reflejan fragmentos de configuración públicos del AL7 e incluyen marcadores de posición donde deberá insertar las credenciales APN del operador.

## Resumen de la configuración

El objetivo de la configuración es preparar el AL7 para conectarse de forma fiable a Plaspy y reportar datos de GPS y eventos en el intervalo deseado. El AL7 admite comunicación por SMS, TCP y UDP, y puede configurarse en modo de reporte binario además de personalizar los informes de eventos mediante su interfaz de comandos AT.

- Configure los parámetros GPRS del dispositivo para que abra una sesión de datos hacia Plaspy
- Habilite el reporte de eventos para entradas como ACC para monitorear encendido o movimiento
- Establezca un intervalo de reporte para actualizaciones periódicas de posición
- Elija TCP o UDP como transporte hacia el endpoint del servidor Plaspy en el puerto compartido
- Verifique el estado y la conectividad del dispositivo después de aplicar los ajustes para que las ubicaciones aparezcan en Plaspy

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Estos valores de servidor son el endpoint común que Plaspy utiliza para los dispositivos soportados y deben ingresarse en el AL7 donde se configuren el servidor GPRS o el host remoto.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM válida con datos móviles habilitados y los detalles de APN correctos proporcionados por el operador
- Alimentación dentro del rango soportado por el AL7 para que el dispositivo pueda establecer GPRS (el AL7 admite un amplio rango de voltaje de entrada)
- Acceso al método oficial de configuración ATrack para su versión de dispositivo, como comandos por SMS, herramienta de configuración por puerto serie o software del fabricante
- Conocimientos básicos para enviar comandos de configuración estilo AT o usar la herramienta del proveedor para aplicar esos comandos
- Una forma de confirmar los reportes del dispositivo, como revisar la lista de dispositivos en Plaspy o usar la consulta de información AT$INFO=? en el AL7

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AL7 abre una sesión GPRS y envía mensajes de ubicación y eventos al endpoint compartido de Plaspy. Plaspy escucha en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo entrante, por lo que los rastreadores no necesitan puertos individuales.

- El AL7 se configura para reportar al dominio o IP del servidor Plaspy usando el transporte seleccionado
- Los mensajes de posición y eventos se envían por TCP o UDP al puerto 8888 de Plaspy
- Disparadores de eventos como cambios en ACC pueden configurarse para generar reportes inmediatos
- Los datos almacenados en búfer se transmiten cuando hay conexión disponible, de modo que posiciones históricas llegan a Plaspy
- Plaspy analiza automáticamente el protocolo del rastreador entrante para mostrar los datos del dispositivo

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración ATrack para el AL7 que corresponda con el firmware y la región del dispositivo.
2. Ingrese el servidor Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 en la configuración GPRS o de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si la configuración del AL7 requiere elegir un tipo de transporte.
5. Aplique o guarde la configuración en el AL7 y verifique que el dispositivo acepte los ajustes.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requieren para que los cambios entren en vigor.
7. Valide que el AL7 reporte a Plaspy revisando la vista de dispositivos en Plaspy o usando el comando de verificación AT$INFO=?.

## Comandos de configuración de ejemplo

Los siguientes comandos públicos de ejemplo se publican para configurar un AL7 para Plaspy. Muestran cómo establecer un evento ACC, un intervalo de rastreo de 60 segundos, formato de salida binario y el servidor GPRS. Preserve los marcadores de posición [apn], [apnu] y [apnp] cuando sustituya los valores de su operador.

1. Configurar reporte de evento ACC y acciones relacionadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```
- Explicación: configura la entrada y dos definiciones de reporte junto con una acción para eventos ACC.

2. Establecer intervalo de tiempo a 60 segundos para rastreo
```text
AT$TRAC=1,60,,,,,2
```
- Explicación: habilita el rastreo periódico con un intervalo de 60 segundos. Ajuste según la política de reporte que necesite.

3. Establecer formato de mensajes binario (compacto)
```text
AT$FORM=1,@P,0,""
```
- Explicación: cambia el formato de mensaje a binario, que algunos plataformas y analizadores esperan. Confirme la compatibilidad con Plaspy; Plaspy detecta el protocolo automáticamente y puede parsear formatos soportados.

4. Configurar el servidor GPRS hacia Plaspy con marcadores de APN
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
- Explicación: configuración GPRS incluyendo campos APN y la IP y puerto del servidor Plaspy. Reemplace [apn], [apnu] y [apnp] con el APN, el usuario y la contraseña de su operador si son requeridos. El comando incluye la IP del servidor Plaspy 54.85.159.138 y el puerto 8888 como se muestra.

Comando de verificación para comprobar el estado del dispositivo
```text
AT$INFO=?
```
- Explicación: consulta el estado y la configuración del dispositivo para verificar después de aplicar los ajustes.

Nota sobre los marcadores de posición: [apn] es el nombre del punto de acceso del operador móvil, [apnu] es el nombre de usuario del APN si se requiere y [apnp] es la contraseña del APN si se requiere. Algunas redes solo solicitan el APN y dejan usuario y contraseña en blanco.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos AT o los parámetros disponibles; verifique los comandos para su versión de firmware antes de aplicarlos.
- Elija UDP o TCP según las necesidades de la instalación; ambos transportes son compatibles con Plaspy en el puerto 8888, pero el comportamiento (por ejemplo, persistencia de conexión) difiere según el transporte.
- Si su operador requiere autenticación específica del APN, asegúrese de completar [apnu] y [apnp] o dejarlos vacíos según lo exija el operador.
- Algunos instaladores prefieren ingresar el IP del servidor en lugar del nombre de dominio; Plaspy soporta tanto d.plaspy.com como 54.85.159.138.
- Use el comando de verificación AT$INFO=? después de la configuración para confirmar el estado del dispositivo y el registro en la red GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el ATrack AL7 para reportar al servidor Plaspy proporciona a las organizaciones una manera sencilla de centralizar la recolección de datos de ubicación y eventos de sus vehículos en una sola plataforma. El enfoque de endpoint compartido de Plaspy facilita el despliegue porque todos los dispositivos soportados reportan al mismo servidor y puerto, y la plataforma detecta automáticamente los protocolos entrantes para reducir la carga de configuración por dispositivo.

Si desea obtener más información sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guías de instalación, verifique los detalles en el sitio del fabricante ATrack https://www.atrack.com.tw/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
