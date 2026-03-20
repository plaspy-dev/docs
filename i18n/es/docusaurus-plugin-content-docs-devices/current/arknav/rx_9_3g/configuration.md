---
slug: /arknav/rx_9_3g/configuration
id: rx_9_3g-configuration
sidebar_label: Configuration
title: ArkNav - RX-9 3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ArkNav RX-9 3G para Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración ArkNav RX-9 3G
  - Instalación ArkNav RX-9 3G
  - Configuración rastreador ArkNav
  - RX-9 3G Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Instalación rastreador vehicular
  - Rastreador para gestión de flotas
  - Configuración servidor RX-9 3G
  - Configuración GPS ArkNav
---

# ArkNav - RX-9 3G Configuration

Esta página ofrece el contexto público de configuración para usar el rastreador vehicular ArkNav RX-9 3G con Plaspy. Explica los ajustes de servidor compartidos por Plaspy que debe aplicar al dispositivo, detalla los requisitos habituales y describe el flujo de trabajo práctico para preparar el RX-9 3G y que sea visible en la plataforma Plaspy. El RX-9 3G es un rastreador impermeable con módulos GPS y GSM integrados y funciones como medición de temperatura, soporte de identificación de conductor y comportamiento de rastreo configurable, lo que lo hace apto para gestión de flotas y seguimiento de activos.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles, detectando automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para el RX-9 3G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del vendedor. Use esta guía como referencia pública práctica para los ajustes de Plaspy y contraste las acciones finales con la documentación de ArkNav o la herramienta de configuración que le hayan proporcionado.

## Resumen de la configuración

Configurar el RX-9 3G para Plaspy consiste en dirigir el rastreador al servidor de Plaspy y asegurarse de que el dispositivo pueda establecer una sesión de transporte (UDP o TCP) para enviar sus reportes. Una vez que el rastreador se conecta al endpoint compartido de Plaspy en el puerto requerido, Plaspy detectará el protocolo e iniciará la ingestión de datos de ubicación y eventos para su visualización en la plataforma.

- Señale el rastreador al endpoint de Plaspy para que la telemetría salga hacia la plataforma
- Seleccione el modo de transporte que soporte el dispositivo y la red, UDP o TCP
- Verifique la conectividad celular, la SIM y los ajustes de APN si su instalación lo requiere
- Guarde y aplique los ajustes; reinicie el rastreador si el dispositivo lo solicita
- Confirme que el dispositivo está reportando y es visible en Plaspy después de la configuración

## Ajustes de servidor de Plaspy

Al configurar el ArkNav RX-9 3G para Plaspy, utilice los siguientes ajustes públicos de servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto una vez que el dispositivo establezca la conexión.

## Requisitos habituales antes de comenzar

- Acceso al método o software oficial de configuración de ArkNav proporcionado por el fabricante o el vendedor
- Dispositivo alimentado con batería suficiente o alimentación externa e instalado según las instrucciones del fabricante
- SIM celular activa y conectividad de datos configurada si el dispositivo requiere GPRS
- APN y credenciales de la SIM a mano si su proveedor lo exige
- Conocimiento del IMEI del dispositivo o identificador único para registro o verificación en Plaspy
- Acceso a una cuenta de Plaspy o a un usuario de la plataforma para confirmar la visibilidad del dispositivo después de la configuración
- Documentación del fabricante o contacto de soporte para resolver diferencias específicas de firmware o hardware

## Cómo se conecta este rastreador a Plaspy

El RX-9 3G envía su posición y datos de eventos a través de la red celular al endpoint compartido de Plaspy y al puerto correspondiente. Una vez configurado para apuntar al endpoint de Plaspy, el rastreador abre una sesión UDP o TCP y transmite actualizaciones de ubicación, latidos y mensajes de eventos que Plaspy procesa y muestra.

- El rastreador inicia una conexión saliente a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte de datos puede usar UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a decodificar los mensajes entrantes
- Las actualizaciones de ubicación, alarmas y lecturas de sensores del RX-9 3G se reenviarán a Plaspy para monitoreo en tiempo real
- Tras la conexión exitosa, el dispositivo se vuelve visible y gestionable en Plaspy para seguimiento e informes

## Flujo de trabajo típico de configuración

1. Acceda al método, herramienta o software oficial de configuración del ArkNav RX-9 3G proporcionado por el fabricante o su vendedor.
2. Ingrese la dirección del servidor de Plaspy configurando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 como puerto de destino para la telemetría.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su red y preferencia de equipo.
5. Ingrese el APN y las credenciales de la SIM si el rastreador necesita datos celulares para alcanzar Plaspy.
6. Aplique o guarde la configuración y reinicie el rastreador si el firmware del dispositivo requiere un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte correctamente a Plaspy comprobando la visibilidad del equipo y las actualizaciones de posición recientes en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El ArkNav RX-9 3G puede configurarse usando herramientas del fabricante, comandos SMS o utilidades OTA según el firmware y la configuración del vendedor. Los comandos exactos dependen de la sintaxis de configuración de ArkNav y la versión de firmware, y no se incluyen aquí como parte de esta guía pública.

Consulte el manual de usuario de ArkNav o su herramienta de proveedor para el formato de comando específico necesario para establecer el dominio del servidor, la IP del servidor, el puerto, el tipo de transporte y el APN. Si dispone de un conjunto de comandos del fabricante, aplíquelos en el orden requerido por el dispositivo e incluya marcadores de posición tales como [apn] o [apnu] exactamente como los proporcione el fabricante; estos marcadores deben reemplazarse por el APN, nombre de usuario y contraseña de su SIM cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones disponibles; confirme siempre los comandos correctos para el firmware de su dispositivo.
- TCP y UDP ofrecen comportamientos distintos en redes variables; elija el transporte que mejor se adapte a la fiabilidad de su red y al soporte del equipo.
- El RX-9 3G soporta actualizaciones de firmware OTA según la documentación de ArkNav; algunas opciones de configuración pueden añadirse o modificarse mediante actualizaciones.
- Las antenas integradas y la carcasa impermeable influyen en las decisiones de instalación; siga las recomendaciones de ArkNav para colocación y tendido de cables.
- Mantenga un registro del IMEI del dispositivo y la configuración aplicada para simplificar el registro y la resolución de problemas con Plaspy y el soporte de ArkNav.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav RX-9 3G con Plaspy ofrece a las organizaciones una forma sencilla de centralizar ubicaciones de vehículos, alertas de eventos y lecturas de sensores en una plataforma unificada. Dirigir el rastreador al endpoint compartido de Plaspy en el puerto 8888 permite una ingestión consistente de telemetría en flotas mixtas, mientras que la detección automática de protocolos de Plaspy elimina la necesidad de seleccionar o registrar manualmente variantes de protocolos de bajo nivel.

Para obtener más información sobre Plaspy y cómo integrar dispositivos como el ArkNav RX-9 3G visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo ArkNav, notas de firmware y herramientas de configuración consulte el sitio del fabricante https://www.arknavgps.com.tw/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que verifique siempre la documentación de ArkNav al aplicar cambios de configuración.
