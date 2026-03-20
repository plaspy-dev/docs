---
slug: /queclink/sc350mg/configuration
id: sc350mg-configuration
sidebar_label: Configuration
title: QuecLink - SC350MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador QuecLink SC350MG con Plaspy, incluye comandos SMS y ajustes del servidor Plaspy
keywords:
  - Configuración QuecLink SC350MG
  - Configuración SC350MG Plaspy
  - Configuración rastreador QuecLink
  - Configuración servidor SC350MG
  - Integración rastreador GPS Plaspy
  - Configuración rastreador e-bike
  - Comandos SMS SC350MG
  - Configuración dispositivo QuecLink
  - Ajustes servidor rastreador GPS
  - Configuración dispositivo Plaspy
---

# QuecLink - Configuración del SC350MG

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink SC350MG con Plaspy. Resume los pasos prácticos, los comandos SMS incluidos en la documentación del dispositivo y los ajustes compartidos del servidor Plaspy necesarios para que el rastreador envíe datos de ubicación y eventos a la plataforma.

Plaspy usa un endpoint de servidor compartido y detecta automáticamente el protocolo del rastreador durante el registro. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía se enfoca en los ajustes públicos y los comandos SMS disponibles para el SC350MG y cómo aplicarlos para la compatibilidad con Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar el SC350MG para que se comunique de forma fiable con Plaspy y quede visible en la plataforma. Los comandos públicos que se muestran a continuación ilustran un flujo de configuración habitual vía SMS para dispositivos QuecLink e incluyen la configuración del servidor, APN, intervalos de reporte y un restablecimiento de fábrica opcional.

- Configure el dispositivo para que reporte a Plaspy usando el endpoint compartido d.plaspy.com y el puerto 8888.
- Proporcione al dispositivo los ajustes APN correctos para que establezca conectividad de datos móviles y envíe reportes GPRS.
- Establezca intervalos de reporte para que las actualizaciones de ubicación aparezcan en Plaspy con la frecuencia esperada.
- Opcionalmente, restaure los ajustes de fábrica o habilite entradas como el reporte SOS antes del despliegue.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta datos del QuecLink SC350MG sin necesidad de seleccionar manualmente el protocolo en Plaspy

Todos los dispositivos QuecLink SC350MG configurados para Plaspy deben usar estos valores de servidor compartido. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.

## Requisitos previos típicos

- Un SC350MG con alimentación y acceso a su interfaz de configuración por SMS o a la herramienta del fabricante.
- Una tarjeta SIM activa con datos móviles y capacidad de SMS instalada en el dispositivo y credenciales APN válidas.
- Conocimiento de la contraseña por defecto del dispositivo usada en los comandos SMS; en los ejemplos siguientes la contraseña por defecto es queclink.
- Un teléfono o pasarela SMS capaz de enviar mensajes de configuración al dispositivo.
- Acceso a la documentación de QuecLink o a las herramientas del proveedor para confirmar diferencias específicas de firmware y la sintaxis requerida de los comandos.
- Una cuenta de Plaspy y el flujo de registro de dispositivos en la plataforma listos para validar los reportes tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El SC350MG se configura para enviar reportes GPRS al endpoint y puerto del servidor Plaspy, de modo que la plataforma reciba los mensajes de ubicación y eventos. Una vez que el dispositivo tiene APN y configuración de servidor válidos, enviará telemetría a Plaspy para su visualización y monitoreo.

- El dispositivo reporta ubicación GNSS y mensajes de estado a d.plaspy.com usando el puerto 8888.
- Plaspy puede aceptar conexiones vía UDP o TCP en el puerto 8888 según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para asociar los mensajes entrantes con el tipo de dispositivo correcto.
- Eventos como SOS o cambios en las entradas pueden reenviarse a Plaspy después de habilitar las entradas correspondientes.
- Tras la configuración, debe validar el dispositivo en Plaspy para confirmar que se reciben telemetría y mensajes de estado.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de QuecLink para el SC350MG (comandos SMS o herramienta del fabricante) para preparar el dispositivo para la configuración del servidor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 al establecer la entrada del servidor GPRS.
3. Establezca el puerto del servidor a 8888 como lo requiere Plaspy.
4. Elija transporte UDP o TCP en el dispositivo si este requiere una selección explícita del transporte.
5. Proporcione los ajustes APN del operador celular usando el comando APN del dispositivo (use marcadores como {{apn}}, {{apnu}}, {{apnp}} donde corresponda).
6. Aplique o guarde la configuración en el rastreador y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y actualizaciones de ubicación en la plataforma.

## Ejemplos de comandos de configuración

El SC350MG admite configuración por SMS. Los siguientes comandos SMS públicos se ofrecen como ejemplo en la documentación de QuecLink. Envíe cada línea como un SMS al número de teléfono del dispositivo. La contraseña por defecto del dispositivo utilizada en estos comandos es queclink.

Notas:
- Si un comando contiene marcadores como {{apn}}, {{apnu}} o {{apnp}}, reemplácelos por el APN, el usuario del APN y la contraseña del APN proporcionados por su operador.
- El primer comando restaura los ajustes de fábrica y es opcional; úselo solo cuando sea necesario.

1. Restaurar ajustes de fábrica (reset inicial opcional)
   ```text
   AT+GTRTO=queclink,4,,,,,,FFFF$
   ```

2. Ajustar la zona horaria a UTC+0
   ```text
   AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
   ```

3. Establecer el APN del operador (reemplazar marcadores)
   ```text
   AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
   ```
   - {{apn}} = el APN de su operador
   - {{apnu}} = nombre de usuario del APN si se requiere
   - {{apnp}} = contraseña del APN si se requiere

4. Configurar el servidor GPRS para Plaspy usando entrada de dominio e IP (dominio e IP incluidos en el comando)
   ```text
   AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
   ```
   - Este comando establece el servidor primario en d.plaspy.com e incluye la IP del servidor 54.85.159.138 con el puerto 8888.

5. Establecer el intervalo de reporte a 60 segundos
   ```text
   AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
   ```

6. Habilitar notificación del botón SOS en la entrada 2
   ```text
   AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
   ```

Después de enviar estos SMS, permita que el dispositivo se registre en la red y luego verifique los reportes en Plaspy.

## Notas de configuración

- La configuración por SMS es de uso común en dispositivos QuecLink; asegúrese de enviar los mensajes SMS al número asignado a la SIM instalada en el equipo.
- Las revisiones de firmware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme los comandos con las notas de firmware del SC350MG de QuecLink.
- Elija transporte UDP o TCP según las condiciones de red y la preferencia del instalador; Plaspy admite ambos en el puerto 8888.
- Mantenga el patrón de uso de la contraseña por defecto en los comandos o actualice la contraseña del dispositivo según su política de seguridad después de la configuración inicial.
- Cuando use marcadores de APN, confirme las credenciales del operador con su proveedor de SIM antes de enviar los comandos de configuración.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink SC350MG con Plaspy ofrece a operadores de e‑bikes y gestores de flota visibilidad centralizada de la ubicación y los eventos del dispositivo. La forma compacta del SC350MG y sus capacidades de datos de vehículo, combinadas con el endpoint compartido de Plaspy, facilitan el despliegue de muchos dispositivos rápidamente manteniendo los ajustes de servidor consistentes en toda la flota.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para referencias específicas de comandos, detalles de firmware y la documentación técnica más reciente del SC350MG, verifique los recursos oficiales de QuecLink en https://www.queclink.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
