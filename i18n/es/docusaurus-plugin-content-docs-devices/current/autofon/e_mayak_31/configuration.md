---
slug: /autofon/e_mayak_31/configuration
id: e_mayak_31-configuration
sidebar_label: Configuration
title: AutoFon - E-Mayak 3.1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AutoFon E-Mayak 3.1 para usar con Plaspy, incluyendo ajustes de servidor, flujo de configuración y guía de integración por SMS
keywords:
  - Configuración AutoFon E-Mayak 3.1
  - Instalación AutoFon E-Mayak 3.1
  - Configuración de servidor AutoFon E-Mayak 3.1
  - AutoFon E-Mayak 3.1 Plaspy
  - Configuración rastreador GPS AutoFon
  - Integración SMS E-Mayak 3.1
  - Guía de configuración tracker AutoFon
  - Configuración rastreador Plaspy
  - Rastreo vehicular E-Mayak 3.1
  - Rastreo de activos AutoFon
---

# AutoFon - E-Mayak 3.1 Configuración

Esta página ofrece el contexto público de configuración para usar el AutoFon E-Mayak 3.1 con Plaspy. Resume cómo se comunica el E-Mayak 3.1, qué se necesita para integrarlo en los flujos de trabajo de Plaspy y qué ajustes de servidor utilizar al enrutar los datos del dispositivo hacia la plataforma. La guía aquí se enfoca en información práctica y pública, no en procedimientos privados del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El E-Mayak 3.1 es un dispositivo orientado a SMS, por lo que la configuración en el lado del fabricante puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use los pasos siguientes para planear la integración y confirme los detalles con la documentación oficial de AutoFon cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara el E-Mayak 3.1 para entregar posición y telemetría a Plaspy ya sea mediante transporte de red directo, cuando esté disponible, o reenviando mensajes SMS a los canales de entrada de Plaspy. El objetivo es asegurar que el dispositivo sea accesible, que los mensajes se interpreten correctamente y que las posiciones se muestren en la plataforma Plaspy.

- Apunte la salida del dispositivo o de un gateway SMS al endpoint del servidor de Plaspy cuando use transporte IP, o a los canales de entrada de Plaspy cuando use reenvío de SMS.
- Configure el transporte del dispositivo cuando corresponda y establezca el puerto compartido de Plaspy para que la plataforma reciba datos de forma consistente.
- Valide la identidad del dispositivo y el formato de los mensajes para que Plaspy detecte automáticamente el protocolo del rastreador y decodifique los mensajes correctamente.
- Pruebe con mensajes de posición y telemetría en vivo para confirmar el mapeo, el reporte de batería y latidos, y cualquier mensaje de alerta.
- Documente el método de integración elegido para mantenimiento, especialmente porque el E-Mayak 3.1 suele depender del reenvío de SMS en lugar de GPRS continuo.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporta transporte UDP o TCP
- detección automática de protocolo en Plaspy

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica el manejo en el lado del servidor para flotas mixtas.

## Requisitos típicos antes de la configuración

- Un E-Mayak 3.1 alimentado y funcional con una SIM válida capaz de enviar SMS.
- Acceso al método oficial de configuración de AutoFon para el E-Mayak 3.1, ya sea mediante el conjunto de comandos SMS o las herramientas del fabricante.
- Una cuenta de Plaspy o un endpoint de entrada de Plaspy designado donde se recibirán los mensajes reenviados o las publicaciones API.
- Un plan para cómo los SMS llegarán a Plaspy: reenvío directo a un gateway SMS que haga POST a Plaspy, parseo manual o un servicio de integración.
- Una SIM de prueba o un plan de SMS económico para las verificaciones y pruebas de batería/latidos.
- Conocimiento del PIN del dispositivo y de los ajustes de número del propietario para aplicar comandos administrativos.

## Cómo se conecta este rastreador a Plaspy

El E-Mayak 3.1 está optimizado para control e informes por SMS. En la práctica, lo conecta a Plaspy asegurando que sus mensajes salientes lleguen a Plaspy o a un servicio que los reenvíe a Plaspy. Si alguna variante o versión de firmware ofrece transporte de red, se puede usar directamente el servidor y puerto compartido de Plaspy.

- El método de conexión principal son mensajes SMS con coordenadas, enlaces de mapa y telemetría que se reenvían a Plaspy.
- Use un gateway de SMS a HTTP o SMS a API para publicar el contenido de los SMS en los endpoints de Plaspy, o pegue enlaces de mapa cuando Plaspy los soporte.
- Para rastreadores o gateways que soporten transporte IP, configure el dispositivo o el gateway para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.
- Plaspy detectará automáticamente el protocolo utilizado y decodificará los mensajes estándar de rastreadores para su visualización y registro.
- Valide los SMS de latido (heartbeat) y los mensajes de telemetría para que Plaspy muestre el estado del dispositivo y la batería en los tableros.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración del AutoFon E-Mayak 3.1 según lo documentado por el fabricante.
2. Cuando esté disponible el transporte IP o si usa un gateway, ingrese d.plaspy.com o 54.85.159.138 como host de destino.
3. Configure el puerto 8888 como el puerto de destino que usa Plaspy para todos los dispositivos compatibles.
4. Si el dispositivo o el gateway requiere seleccionar el transporte, elija UDP o TCP según las instrucciones del dispositivo.
5. Aplique o guarde la configuración en el dispositivo o gateway y asegúrese de que los ajustes persistan tras ciclos de energía.
6. Reinicie el dispositivo si el fabricante lo requiere para activar los nuevos ajustes de red o entrega de SMS.
7. Valide que el dispositivo reporte a Plaspy enviando una posición de prueba o un latido y confirmando la recepción en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Este dispositivo se configura principalmente mediante comandos SMS o herramientas del proveedor y el conjunto exacto de comandos puede variar según el firmware y las compilaciones regionales. Dado que los comandos y la sintaxis del fabricante cambian con el tiempo, consulte la documentación oficial del AutoFon E-Mayak 3.1 para las cadenas SMS exactas y los comandos administrativos necesarios para establecer números de propietario, PIN y formatos de mensaje.

Si integra mediante un gateway SMS a API, configure el gateway para reenviar los SMS a Plaspy y mapee los campos entrantes SMS al formato que Plaspy espera. Si su gateway o una variante del rastreador soporta transporte IP directo, use los ajustes de servidor Plaspy indicados arriba.

## Notas de configuración

- E-Mayak 3.1 prioriza SMS. No asuma GPRS o telemetría IP continua a menos que una revisión de hardware o una versión de firmware lo indique explícitamente.
- Cuando estén disponibles tanto UDP como TCP, pruebe ambos transportes, ya que las condiciones de red y el comportamiento del gateway pueden afectar la entrega y la latencia.
- La vida útil de la batería y el comportamiento de deep-sleep afectan cuándo y cómo el rastreador responde a consultas y envía latidos; planifique intervalos de prueba en consecuencia.
- Mantenga documentados y seguros los PIN del fabricante y los ajustes de número del propietario; intentos incorrectos de PIN pueden bloquear el acceso administrativo.
- Use un entorno de prueba controlado y una SIM de prueba para confirmar el parseo de SMS en Plaspy antes de un despliegue a gran escala.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AutoFon E-Mayak 3.1 proporciona a los equipos una forma práctica de visualizar ubicaciones y telemetría bajo demanda desde un rastreador SMS de bajo consumo y discreto. Para flujos de trabajo que priorizan larga duración de batería, baja detectabilidad y comprobaciones periódicas de ubicación, reenviar SMS a Plaspy ofrece mapeo, alertas y visibilidad operativa básica sin necesidad de suscripciones de datos continuos.

Learn more about Plaspy on the main website https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and SMS command reference with AutoFon at https://www.autofon.ru/.
