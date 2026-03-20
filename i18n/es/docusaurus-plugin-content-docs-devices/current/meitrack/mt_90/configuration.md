---
slug: /meitrack/mt_90/configuration
id: mt_90-configuration
sidebar_label: Configuration
title: Meitrack - MT-90 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Meitrack MT-90 con Plaspy usando ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Meitrack MT-90
  - Instalación Meitrack MT-90
  - Configuración MT-90 Plaspy
  - Configuración rastreador GPS Meitrack
  - Configuración servidor MT-90
  - Software de rastreo Meitrack
  - Configuración GPRS MT-90
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS personal
  - Comandos SMS MT-90
---

# Meitrack - MT-90 Configuración

Esta página documenta el contexto público de configuración para usar el Meitrack MT-90 con Plaspy. Se centra en los ajustes de servidor prácticos y en comandos de ejemplo comúnmente utilizados para apuntar el MT-90 a Plaspy, de modo que el dispositivo sea visible y manejable desde la plataforma. El contenido aquí utiliza ejemplos de comandos SMS públicos para la configuración del MT-90 y mantiene las recomendaciones aplicables de forma general.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo MT-90 soporta rutas de configuración por SMS y GPRS según documentación pública, por lo que esta página incluye los comandos SMS que se usan comúnmente para registrar el dispositivo en Plaspy.

## Visión general de la configuración

Preparar el MT-90 para su uso con Plaspy implica configurar el equipo para que reporte vía GPRS al endpoint compartido de Plaspy y verificar que el rastreador informe correctamente. Para MT-90, el flujo público habitual usa comandos SMS para establecer el servidor GPRS y el comportamiento de reporte, aunque también puede emplearse software de configuración del proveedor cuando esté disponible.

- Configure el MT-90 con los ajustes de servidor de Plaspy para que la ubicación y los eventos se transmitan a la plataforma.
- Establezca intervalos de reporte y reglas de eventos para controlar la frecuencia de actualizaciones y las alertas visibles en Plaspy.
- Verifique la conectividad y los ajustes APN de GPRS para que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Opcionalmente realice un reinicio de fábrica o una secuencia inicial de SMS al preparar el equipo para su primer uso.
- Confirme que el dispositivo aparece en Plaspy después de la configuración y que eventos y ubicaciones son visibles.

## Ajustes del servidor de Plaspy

- El dominio del servidor d.plaspy.com debe ingresarse donde el dispositivo requiera un nombre de host.
- La IP del servidor 54.85.159.138 es el endpoint numérico publicado para Plaspy.
- El puerto 8888 es el puerto único utilizado por Plaspy para todos los dispositivos soportados.
- El transporte puede ser UDP o TCP según la opción de configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar reportes de muchos protocolos comunes.

## Requisitos típicos antes de la configuración

- Una unidad MT-90 cargada y operativa con acceso a SMS o al método de configuración del fabricante.
- Una tarjeta SIM válida con datos habilitados y los detalles APN del operador disponibles para los marcadores [apn], [apnu] y [apnp].
- Capacidad para enviar comandos SMS al dispositivo o acceso al software de configuración de Meitrack si lo prefiere.
- Conocimiento básico de la contraseña del dispositivo usada para comandos SMS; el ejemplo público usa 0000 como valor por defecto.
- Fuente de energía estable o batería cargada durante la configuración inicial para evitar interrupciones.

## Cómo se conecta este rastreador a Plaspy

El MT-90 se configura para reportar al endpoint y puerto compartidos de Plaspy para que los datos de ubicación y eventos se reenvíen a la plataforma para monitoreo e informes. Una vez que el MT-90 tiene conectividad GPRS válida y los ajustes de servidor correctos, empezará a enviar las actualizaciones configuradas a Plaspy, donde la plataforma identifica y decodifica automáticamente el protocolo del dispositivo.

- El dispositivo envía mensajes periódicos de posición y eventos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP en el rastreador si el firmware solicita una elección.
- Plaspy recibe los reportes entrantes y detecta automáticamente el protocolo usado por el rastreador.
- Eventos y actualizaciones periódicas aparecen en Plaspy para monitoreo operativo y alertas.
- Confirmar las primeras transmisiones exitosas asegura que el MT-90 sea visible y reporte correctamente en Plaspy.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Meitrack para el MT-90, típicamente comandos SMS o el software de configuración del proveedor.
2. Ingrese el servidor de Plaspy ya sea como nombre de host d.plaspy.com o como IP de servidor 54.85.159.138.
3. Establezca el puerto del servidor a 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en el equipo y envíe los comandos de confirmación requeridos.
6. Reinicie el dispositivo si el firmware lo exige o después de modificar los ajustes del servidor.
7. Valide que el MT-90 reporte a Plaspy revisando el estado del dispositivo y las ubicaciones recientes en la plataforma Plaspy.

## Comandos de ejemplo para la configuración

El MT-90 puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos son ejemplos públicos para restablecer valores de fábrica y establecer parámetros del servidor GPRS. Las muestras usan la contraseña por defecto 0000 que aparece en la documentación pública. Mantenga los marcadores de APN al enviar los comandos.

- Reinicio opcional a ajustes de fábrica al preparar un dispositivo
```text
0000,F11
```
Este comando restablece la configuración de fábrica y se usa comúnmente como paso inicial si necesita una configuración limpia. Úselo solo cuando sea necesario.

- Configure el servidor GPRS a Plaspy usando la IP del servidor, el puerto y los marcadores de APN
```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
Explicación:
- 0000 es la contraseña por defecto del dispositivo en el ejemplo público.
- A21 establece la entrada del servidor GPRS.
- 2 indica el tipo de servidor primario según la sintaxis del equipo en la documentación de Meitrack.
- 54.85.159.138 y 8888 son la IP y el puerto del servidor Plaspy.
- [apn] es el marcador para el nombre APN del operador.
- [apnu] es un marcador opcional para el usuario APN.
- [apnp] es un marcador opcional para la contraseña APN.

- Establecer la zona horaria a UTC 0
```text
0000,B36,0
```

- Establecer el intervalo de actualización de reporte a 1 minuto
```text
0000,A12,6,0
```
Esto configura comúnmente el comportamiento de reporte periódico por GPS; consulte la documentación del fabricante para el significado exacto de los parámetros.

- Establecer la configuración de eventos
```text
0000,C03,0
```
Esto ajusta las opciones de reporte de eventos; refiérase a la documentación de Meitrack para los detalles del bitmask de eventos.

Nota sobre los marcadores
- Reemplace [apn] por el valor APN de su operador móvil. Si su operador requiere credenciales, reemplace [apnu] y [apnp] con el usuario y la contraseña. Si no se requieren credenciales, esos marcadores normalmente pueden omitirse.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o el significado de los parámetros; siempre verifique con la documentación de Meitrack para el firmware de su MT-90.
- Los comandos públicos del MT-90 mostrados usan SMS para la configuración; las herramientas del proveedor o un cable de configuración pueden ofrecer métodos alternativos.
- Elegir TCP frente a UDP puede afectar las características de entrega de mensajes; seleccione el transporte que su despliegue y red recomienden y soporten.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que el puerto es consistente entre modelos soportados por la plataforma.
- Anote la contraseña del dispositivo y cámbiela según sus prácticas de seguridad tras la configuración inicial si el equipo lo permite.

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack MT-90 para que reporte a Plaspy ofrece un camino directo para centralizar la visibilidad de ubicaciones, eventos y operaciones en casos de uso de monitoreo personal y seguimiento. Usar el endpoint compartido de Plaspy y el puerto común facilita la incorporación de múltiples dispositivos y reduce las diferencias de configuración por dispositivo, ya que Plaspy detecta automáticamente el protocolo del equipo.

Aprenda más sobre Plaspy y cómo se integra con dispositivos como el Meitrack MT-90 en https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y la documentación técnica detallada del MT-90, verifique la información actualizada en el sitio del fabricante https://www.meitrack.com/
