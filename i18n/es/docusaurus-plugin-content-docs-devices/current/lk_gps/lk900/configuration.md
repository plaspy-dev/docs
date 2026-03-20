---
slug: /lk_gps/lk900/configuration
id: lk900-configuration
sidebar_label: Configuration
title: LK-GPS - LK900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK900 con los ajustes de servidor de Plaspy y pasos prácticos de conexión
keywords:
  - Configuración LK-GPS LK900
  - Configuración LK900
  - Configuración LK900 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración rastreo vehicular
  - Configuración plataforma GPS
  - Guía integración LK900
  - Ajustes servidor LK-GPS
  - Rastreo de flotas LK900
---

# LK-GPS - Configuración del LK900

Esta página explica el contexto de configuración pública para usar el LK-GPS LK900 con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos y en los pasos prácticos que normalmente seguirá para apuntar el LK900 hacia Plaspy y así permitir que el dispositivo reporte ubicación y estado a su cuenta Plaspy.

Plaspy utiliza ajustes de servidor comunes entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento como una guía práctica para los ajustes más habituales y consulte la documentación del fabricante LK-GPS para comandos específicos del dispositivo o notas de firmware.

## Resumen de la configuración

El objetivo de la configuración es preparar el LK900 para comunicarse de forma confiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y envíe datos de posición y eventos. Normalmente esto implica ingresar el endpoint y el puerto de Plaspy, confirmar la conectividad y validar que el rastreador está transmitiendo.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así las actualizaciones de ubicación lleguen a su cuenta Plaspy.
- Asegúrese de que el LK900 tenga una fuente de alimentación adecuada, acceso a la red y los parámetros APN o SIM correctos si requiere conectividad GSM.
- Elija el método de transporte que soporte el dispositivo (UDP o TCP) y establezca el puerto común de Plaspy.
- Guarde y aplique los ajustes, luego valide que el dispositivo sea visible en Plaspy y esté enviando actualizaciones periódicas.
- Solucione problemas habituales como APN, señal y diferencias de firmware que puedan impedir el reporte.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el LK900. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador una vez que se conecte.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Confirme que el LK900 esté encendido y tenga batería suficiente o una fuente de alimentación conectada para la configuración y las pruebas.
- SIM activa con datos o el método de conectividad necesario para el dispositivo, y parámetros APN correctos si usa conexión GSM.
- Acceso al método o software oficial de configuración de LK-GPS provisto por el fabricante o el proveedor.
- Vista despejada para adquirir señal GPS durante la prueba inicial y una red móvil estable para el reporte por GSM.
- Conocimiento de si su dispositivo requiere SMS, herramienta serial o una app de configuración para aplicar los ajustes de servidor y transporte.
- Acceso a la cuenta Plaspy donde aparecerá el dispositivo para que usted pueda validar el reporte tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LK900 envía datos de ubicación y eventos al endpoint de Plaspy para que el dispositivo pueda ser monitoreado y gestionado dentro de la plataforma. El rastreador se apunta al servidor y puerto compartidos de Plaspy y usa el transporte seleccionado para entregar su telemetría.

- El rastreador envía actualizaciones de posición y eventos comunes al dominio d.plaspy.com en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP según lo soporte el firmware o la herramienta de configuración.
- Plaspy recibe la conexión y detecta automáticamente el protocolo del rastreador para analizar los mensajes entrantes.
- Eventos como movimiento, batería baja, alertas de geocerca y exceso de velocidad pueden enviarse a Plaspy para su visualización y generación de alertas.
- Una configuración exitosa hace que el dispositivo aparezca en su cuenta Plaspy y comience a enviar actualizaciones regulares de estado.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de LK-GPS provisto por el fabricante, vendedor o instalador.
2. En los ajustes de servidor del dispositivo introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si la interfaz de configuración del dispositivo requiere seleccionar el transporte.
5. Configure el APN o los parámetros relacionados con la SIM si el rastreador utiliza datos GSM, luego aplique o guarde la configuración.
6. Reinicie o haga un ciclo de energía al LK900 si el fabricante lo exige para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando su cuenta Plaspy para ver el dispositivo y las últimas actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para programar el LK900 varían según el firmware y la herramienta de configuración del fabricante. Muchos dispositivos LK-GPS permiten la configuración mediante software del fabricante, un conjunto de comandos SMS o una herramienta USB/serial. Dado que los comandos específicos dependen del modelo, consulte la documentación de LK-GPS o la guía del proveedor para los comandos y ejemplos precisos de su revisión de firmware.

Si su dispositivo admite configuración por SMS, los pasos públicos comunes suelen ser:
- Enviar un SMS o usar la herramienta de configuración para establecer el dominio o la IP del servidor.
- Establecer el puerto del servidor en 8888.
- Seleccionar el transporte UDP o TCP si es necesario.
- Guardar los ajustes y reiniciar el dispositivo.

Consulte la documentación oficial de LK-GPS para la sintaxis SMS precisa o los comandos de la herramienta PC para el LK900.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos, los ajustes disponibles y los modos de transporte soportados; verifique la versión de firmware de su dispositivo antes de aplicar instrucciones.
- Elija UDP cuando prefiera menor sobrecarga y la red sea estable; elija TCP si su despliegue necesita una sesión persistente orientada a conexión o si el firmware lo soporta.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta a d.plaspy.com en el puerto 8888, así que concéntrese en los detalles correctos de servidor, puerto y conectividad.
- Asegúrese de que los parámetros APN sean correctos para la SIM en uso; marcadores como {{apn}}, {{apnu}} o {{apnp}} se usan comúnmente en la documentación del fabricante para indicar los valores de su operador.
- Si usa comandos SMS para la configuración, pruebe primero con un solo dispositivo y confirme el comportamiento antes de desplegar a gran escala.

## Por qué usar Plaspy con esta configuración

Usar el LK900 con Plaspy ofrece un camino sencillo hacia la visibilidad de activos y el monitoreo operativo. Al apuntar el dispositivo al servidor y puerto compartidos de Plaspy, la plataforma puede analizar automáticamente los datos de ubicación y eventos, permitiendo a gestores de flotas y activos monitorear movimientos, recibir alertas y revisar el historial en un solo lugar.

Para saber más sobre Plaspy y las funcionalidades soportadas, visite https://www.plaspy.com. Verifique los detalles más recientes de configuración, comandos y comportamiento de firmware del LK900 en el sitio del fabricante https://www.lk-gps.com, ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
