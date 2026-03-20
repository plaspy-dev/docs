---
slug: /autofon/e_ip/configuration
id: e_ip-configuration
sidebar_label: Configuration
title: AutoFon - E-Маяк IP Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon E‑Маяк IP para conectar con Plaspy y habilitar rastreo en tiempo real
keywords:
  - Configuración AutoFon E‑Маяк IP
  - Instalación AutoFon E‑Маяк IP
  - Configuración servidor AutoFon
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Integración seguimiento de vehículos
  - Configuración rastreador SMS
  - Integración de protocolo para rastreadores
  - Configuración monitoreo de flotas
  - Configuración seguimiento de activos
---

# AutoFon - Configuración del E‑Маяк IP

Esta página ofrece el contexto público de configuración para usar el rastreador AutoFon E‑Маяк IP con Plaspy. Se concentra en los ajustes y pasos prácticos públicamente disponibles necesarios para apuntar el dispositivo a Plaspy y así habilitar el rastreo en tiempo real, alertas y la ingestión de telemetría. Use esta guía junto con el manual del dispositivo y los datos de su cuenta Plaspy para completar la puesta en marcha.

El E‑Маяк IP admite actualizaciones de posición por SMS y envío mediante protocolo; Plaspy puede procesar tanto coordenadas reenviadas por SMS como mensajes de protocolo. Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Verifique siempre las instrucciones del fabricante para los comandos y comportamientos específicos del firmware.

## Resumen de la configuración

Este proceso prepara el E‑Маяк IP para comunicarse con Plaspy, validar la conectividad y mostrar el dispositivo en los paneles de Plaspy. El objetivo es apuntar el rastreador a Plaspy, confirmar los ajustes de transporte y verificar el comportamiento de reportes y alarmas.

- Configure el dispositivo para que envíe mensajes de protocolo o SMS al endpoint de Plaspy para que las ubicaciones y eventos lleguen a la plataforma.
- Seleccione el modo de transporte requerido por la unidad y establezca el puerto de Plaspy para que el servidor acepte los mensajes.
- Valide la conectividad y los mensajes de latido para que Plaspy muestre el dispositivo como activo y reportando.
- Verifique que entradas de alarma, eventos de botón SOS y alertas del acelerómetro se reemplacen a Plaspy para notificaciones.
- Confirme que los intervalos de reporte de batería y telemetría se ajusten a sus necesidades operativas para equilibrar autonomía y alertas.

## Ajustes del servidor Plaspy

Al configurar el E‑Маяк IP para envío de protocolo a Plaspy, use los siguientes ajustes públicos exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol once messages arrive

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy intentará detectar el protocolo del rastreador automáticamente.

## Requisitos previos típicos

- Batería cargada o fuente de alimentación instalada y funcional para que la unidad pueda configurarse y probarse.
- Acceso al método oficial de configuración del fabricante, ya sea por comandos SMS, conexión por puerto serie o software del proveedor.
- Una SIM operativa con capacidad de SMS y datos si planea usar mensajería por protocolo sobre GPRS además del SMS.
- Lista de números de teléfono autorizados y cualquier PIN del dispositivo requerido para comandos remotos o configuración por SMS.
- Acceso a Internet a su cuenta Plaspy para verificar la aparición del dispositivo y la telemetría tras la configuración.
- Versión de firmware del dispositivo y documentación del proveedor sobre comandos compatibles para su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

El E‑Маяк IP envía mensajes de ubicación, alarmas y telemetría al endpoint del servidor Plaspy para que la plataforma pueda mapear posiciones y disparar alertas. Una vez configurado, el dispositivo reporta al endpoint y puerto compartidos de Plaspy para que los mensajes sean ingeridos y el protocolo se detecte automáticamente.

- El rastreador puede reenviar mensajes de coordenadas por SMS o enviar paquetes de protocolo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría como pulsaciones de SOS, alertas del acelerómetro, estados de entradas externas y mensajes de latido se entregan a Plaspy para el enrutamiento de alarmas.
- Plaspy recibe datos vía UDP o TCP según el transporte que usted configure en el dispositivo.
- Una vez que los datos llegan, Plaspy detecta el protocolo automáticamente y comienza a mostrar el dispositivo en los paneles de la cuenta.
- Mensajes regulares de latido o liveness garantizan que el dispositivo permanezca visible y monitorizable en Plaspy.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software para el E‑Маяк IP. Esto puede ser mediante comandos SMS, una herramienta del proveedor o configuración por puerto serie según su unidad y firmware.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor o APN del dispositivo donde corresponda.
3. Establezca el puerto del dispositivo en 8888 como puerto destino para los mensajes de protocolo.
4. Elija el modo de transporte UDP o TCP si el dispositivo requiere selección explícita para mensajería por protocolo.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe el comando SMS de guardado según el procedimiento del fabricante.
6. Reinicie el dispositivo si el firmware lo requiere o después de aplicar los ajustes de red para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando su cuenta Plaspy para la aparición del nuevo equipo y observando una posición o mensaje de latido.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración para el E‑Маяк IP pueden variar por firmware y por la herramienta del proveedor que esté usando. Los métodos del fabricante pueden incluir comandos por SMS, una interfaz USB o serie, o software de configuración dedicado. Por esta razón, no se incluyen comandos universales aquí. Consulte el manual de AutoFon o las instrucciones de instalación para las cadenas SMS específicas o el formato de archivo de configuración requerido para ajustar:

- server domain or IP to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP

Si dispone de la lista de comandos del dispositivo proporcionada por AutoFon, siga el orden que allí se recomiende y respete cualquier marcador de posición para APN o credenciales tal como se indique.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos soportados y los flujos de configuración; confirme la sintaxis exacta de los comandos con la documentación de AutoFon para su unidad.
- El E‑Маяк IP soporta tanto reenvío de SMS como mensajes de protocolo por GPRS donde esté configurado; elija el método que mejor se ajuste a su despliegue y plan de SIM.
- Seleccionar TCP o UDP puede afectar el comportamiento de entrega en redes móviles con mala cobertura; pruebe ambos transportes si experimenta mensajes perdidos.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y realiza la detección automática del protocolo cuando llegan mensajes.
- Mantenga un registro de cualquier comando SMS de configuración y de los números autorizados usados para configurar el dispositivo, para facilitar la resolución de problemas y la recuperación.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon E‑Маяк IP con Plaspy ofrece a los equipos una forma práctica de combinar larga autonomía de batería y protección hermética con rastreo centralizado, enrutamiento de alarmas y monitorización de dispositivos. Plaspy ingiere mensajes SMS y de protocolo para que las actualizaciones de ubicación, eventos SOS y alertas de acelerómetro sean visibles en una única plataforma para respuesta operativa y generación de reportes históricos.

Learn more about Plaspy on the main site https://www.plaspy.com and verify the latest device specific configuration methods and firmware details with the manufacturer at https://www.autofon.ru/ . Manufacturer specifications and setup commands can change over time so always confirm current documentation before deploying devices at scale.
