---
slug: /xexun/tk_103_2/configuration
id: tk_103_2-configuration
sidebar_label: Configuration
title: Xexun - TK-103-2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Xexun TK-103-2 y compatibilidad con Plaspy, incluyendo ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Xexun TK-103-2
  - Configuración rastreador Xexun
  - TK-103-2 Plaspy
  - Integración Plaspy GPS
  - Configuración rastreo vehicular
  - Configuración servidor rastreador GPS
  - Plataforma GPS Xexun
  - Comandos SMS TK-103-2
  - Configuración GPRS rastreador
  - Configuración rastreo de flotas
---

# Xexun - TK-103-2 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Xexun TK-103-2 con Plaspy. Presenta los ajustes de servidor compartidos que Plaspy requiere y ofrece información práctica tomada del contenido público de configuración del dispositivo. Utilice esta guía para entender cómo se prepara el rastreador para comunicarse con Plaspy y qué pasos del fabricante suelen ser necesarios.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que se muestran a continuación son las instrucciones públicas por SMS que se usan comúnmente para la configuración inicial del TK-103-2 e incluyen marcadores para valores específicos del operador.

## Resumen de la configuración

Este proceso prepara un TK-103-2 para enviar datos de ubicación y estado a la plataforma Plaspy. El objetivo es apuntar el dispositivo a los puntos de enlace (endpoints) del servidor de Plaspy, asegurar que la conectividad GPRS funcione y confirmar que el dispositivo reporte correctamente para que aparezca en Plaspy.

- Configurar el rastreador con el endpoint y el puerto del servidor de Plaspy para que pueda alcanzar la plataforma
- Proveer el APN del operador y las credenciales necesarias para que el dispositivo se conecte a la red de datos móviles
- Validar la selección de transporte y la conectividad usando UDP o TCP según lo soporte el rastreador
- Verificar que el rastreador reporte en el intervalo programado para que las ubicaciones aparezcan en Plaspy
- Confirmar la visibilidad del dispositivo en Plaspy y supervisar los primeros mensajes para asegurar la detección del protocolo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración

## Requisitos habituales antes de la configuración

- Una tarjeta SIM activa con plan de datos móviles y capacidad de SMS para la configuración vía SMS
- Dispositivo encendido y accesible para que pueda recibir comandos SMS
- APN del operador y, opcionalmente, usuario y contraseña del APN provistos por su operador móvil
- Acceso al método oficial de configuración Xexun, por ejemplo comandos SMS o software del proveedor
- Conocimiento de la contraseña del dispositivo si es distinta a la contraseña por defecto usada en los comandos

## Cómo se conecta este rastreador a Plaspy

El TK-103-2 se configura para reportar ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tiene conectividad GPRS válida y los parámetros del servidor correctos, Plaspy recibirá los mensajes del dispositivo e identificará el protocolo del rastreador automáticamente.

- El dispositivo envía datos por GPRS o mensajes de ubicación por SMS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El rastreador usa UDP o TCP como transporte según la configuración elegida
- Plaspy inspecciona los mensajes entrantes y detecta automáticamente el protocolo del TK-103-2
- Los mensajes del rastreador se vuelven visibles en Plaspy para monitoreo y reproducción histórica
- El uso consistente del mismo puerto en todos los dispositivos simplifica la configuración de la flota

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xexun o al software del proveedor, o prepárese para enviar comandos SMS al rastreador
2. Introduzca la dirección del servidor de Plaspy ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en la configuración del dispositivo
3. Configure el puerto del dispositivo en 8888 que es el puerto que Plaspy utiliza para todos los dispositivos
4. Elija UDP o TCP si el rastreador requiere selección explícita del transporte
5. Proporcione el APN del operador y las credenciales APN que requiera su operador
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si es necesario
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en la plataforma

## Comandos de configuración de ejemplo

El TK-103-2 admite configuración por SMS. Los siguientes comandos SMS públicos se presentan en el orden que comúnmente se usa para la configuración inicial. La contraseña de ejemplo del dispositivo usada en estos comandos es 123456, que es la contraseña de fábrica en los ejemplos públicos. Si su dispositivo usa otra contraseña, reemplace 123456 por la contraseña correcta.

- Comando opcional de restablecimiento de fábrica inicial
  - Use esto solo si desea restaurar los valores de fábrica antes de configurar
  ```
  begin123456
  ```

- Configurar el APN del operador
  - Reemplace {{apn}} por el APN de su operador
  ```
  apn123456 {{apn}}
  ```

- Configurar el usuario del APN
  - Opcional, use solo si su operador requiere un usuario APN. Reemplace {{apnu}} por el usuario
  ```
  apnuser123456 {{apnu}}
  ```

- Configurar la contraseña del APN
  - Opcional, use solo si su operador requiere una contraseña APN. Reemplace {{apnp}} por la contraseña
  ```
  apnpasswd123456 {{apnp}}
  ```

- Configurar el servidor GPRS hacia Plaspy
  - Este comando establece la IP y el puerto del servidor a los valores de Plaspy
  ```
  adminip123456 54.85.159.138 8888
  ```

- Configurar el modo GPRS
  - Use este comando para habilitar el modo GPRS del dispositivo según lo requiera el rastreador
  ```
  gprsmode123456
  ```

- Configurar el intervalo periódico de actualización a 60 segundos
  - Formato de ejemplo del comando de intervalo con la contraseña por defecto
  ```
  t060s***n123456
  ```

Explicación de los marcadores
- {{apn}} es la cadena APN del operador requerida para datos GPRS
- {{apnu}} es el usuario del APN cuando lo requiera el operador
- {{apnp}} es la contraseña del APN cuando lo requiera el operador
- Reemplace 123456 en todos los comandos por la contraseña del dispositivo si se ha cambiado respecto al valor de fábrica

## Notas de configuración

- Diferencias de firmware o variantes regionales de hardware pueden cambiar el formato exacto de los SMS o los comandos disponibles; siempre verifique con la documentación actual de Xexun
- La configuración por SMS es un método común para el TK-103-2, pero puede existir software o herramientas de configuración del proveedor
- Si el rastreador requiere seleccionar TCP o UDP de forma explícita, elija el transporte que se ajuste a su red y a los ajustes de Plaspy; Plaspy acepta ambos
- Mantenga seguras las credenciales y los detalles del APN y verifique los ajustes con su operador móvil si la conectividad falla
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que reduce la variación de ajustes entre dispositivos

## Por qué usar Plaspy con esta configuración

Conectar el Xexun TK-103-2 a Plaspy ofrece visibilidad y monitoreo unificados para flotas de vehículos y equipos. Con el dispositivo apuntando al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen acceso centralizado a reportes de ubicación, notificaciones de eventos y reproducción histórica en una única plataforma, mejorando la supervisión operativa y la capacidad de respuesta.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions with the manufacturer at https://www.xexun.com/.
