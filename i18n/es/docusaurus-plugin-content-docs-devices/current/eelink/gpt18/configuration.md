---
slug: /eelink/gpt18/configuration
id: gpt18-configuration
sidebar_label: Configuration
title: EElink - GPT18 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink GPT18 y conectarlo a Plaspy usando ajustes de servidor compartido y comandos SMS
keywords:
  - configuración EElink GPT18
  - instalación EElink GPT18
  - configuración de servidor EElink GPT18
  - configuración GPT18 Plaspy
  - configuración SMS GPT18
  - ajustes de servidor Plaspy
  - configuración rastreador GPS wearable
  - comandos SMS rastreador GPS
  - integración rastreador personal Plaspy
  - guía de aprovisionamiento de rastreadores
---

# EElink - Configuración del GPT18

Esta página documenta el contexto público de configuración para usar el rastreador wearable EElink GPT18 con la plataforma Plaspy. Se centra en los pasos prácticos y en los ajustes de servidor que usted deberá aplicar para apuntar un dispositivo GPT18 a Plaspy y permitir que reporte ubicación y eventos a la plataforma. Cuando estén disponibles, se incluyen ejemplos de comandos SMS publicados para el aprovisionamiento del GPT18.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el backend. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguir las instrucciones del fabricante junto con los ejemplos que se muestran a continuación.

## Resumen de la configuración

Esta configuración prepara un rastreador GPT18 para enviar su ubicación y eventos a Plaspy, de modo que el dispositivo sea visible para monitoreo, alertas e informes dentro de la plataforma. El proceso normalmente garantiza que el dispositivo tenga acceso a la red, ajustes APN correctos y el servidor de Plaspy configurado por dominio o IP.

- Apuntar el dispositivo al endpoint de servidor de Plaspy para que la telemetría llegue a su cuenta
- Configurar APN y parámetros GPRS para habilitar datos móviles si no desea usar solo SMS
- Validar la conectividad y el envío de datos con telemetría en vivo o mediante la verificación de parámetros del dispositivo
- Establecer intervalos de reporte adecuados para equilibrar precisión y duración de batería
- Confirmar que alertas como SOS y batería baja se reenvían a Plaspy una vez establecida la comunicación

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos pueden usar el mismo puerto

## Requisitos habituales antes de la configuración

- Un GPT18 con batería y acceso físico al dispositivo para el aprovisionamiento inicial
- Una SIM válida con capacidad de datos o SMS según el método de configuración elegido
- Los datos APN correctos del operador móvil; puede usar marcadores de posición en los comandos SMS
- Acceso al método de configuración oficial de EElink, por ejemplo comandos SMS, app móvil o software del proveedor
- Entender el intervalo de reporte requerido y las preferencias de alertas para su despliegue
- Acceso administrativo a Plaspy para confirmar que el dispositivo aparece en su cuenta después del aprovisionamiento

## Cómo se conecta este rastreador a Plaspy

El GPT18 envía datos de ubicación y eventos a través de la red celular al endpoint y puerto compartido de Plaspy. Una vez configurado para apuntar a Plaspy, el dispositivo entregará telemetría que Plaspy ingiere, muestra y utiliza para activar alertas o generar informes.

- Los reportes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte del dispositivo puede ser UDP o TCP según la elección de configuración
- Plaspy recibe mensajes de ubicación, estado y eventos y los asocia con su dispositivo en la plataforma
- Eventos SOS, avisos de batería baja y alertas de geovallas se reenvían a Plaspy para flujos de trabajo de monitoreo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que puede usar el puerto compartido para dispositivos compatibles

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de EElink para su GPT18, por ejemplo aprovisionamiento por SMS, la app del proveedor o las herramientas de configuración del vendedor.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 para que el dispositivo alcance Plaspy.
4. Elija UDP o TCP si el rastreador requiere seleccionar el transporte durante la configuración.
5. Configure el APN y otros parámetros del operador para que el dispositivo pueda conectarse a la red de datos móviles si es necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del proveedor o del equipo lo requieren.
7. Valide los reportes del dispositivo en Plaspy verificando la telemetría en su cuenta o utilizando el comando de consulta de parámetros del dispositivo.

## Ejemplos de comandos de configuración

El GPT18 admite aprovisionamiento por SMS. Los siguientes comandos son ejemplos públicos usados para configurar el dispositivo por SMS. Envíe cada línea como un único mensaje SMS al número del dispositivo. Preserve los marcadores de posición cuando estén presentes.

1. Reinicio de fábrica inicial opcional (usar solo si necesita restaurar valores predeterminados)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Establecer el APN del operador
- Reemplace [apn] por el APN de su operador
- Si es necesario, incluya [apnu] para el usuario del APN y [apnp] para la contraseña del APN
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
(Si su dispositivo o proveedor requiere campos separados, use el formato que le indique su proveedor. Los marcadores [apn], [apnu] y [apnp] deben sustituirse por valores reales.)

4. Establecer el servidor GPRS usando el dominio de Plaspy (recomendado para resolución DNS)
```text
SERVER,1,d.plaspy.com,8888#
```

5. O establecer el servidor GPRS usando la IP de Plaspy directamente
```text
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de reporte a 60 segundos
```text
TIMER,60#
```

7. Verificar parámetros actuales del dispositivo
```text
PARAM#
```

Notas sobre estos comandos:
- Los ejemplos de SERVER muestran opciones tanto por dominio como por IP. Use d.plaspy.com o 54.85.159.138 con el puerto 8888.
- El comando APN contiene marcadores de posición. Reemplácelos con los datos de su operador antes de enviar.
- El dispositivo puede aceptar configuración mediante otras herramientas del proveedor o la app móvil además de SMS.

## Observaciones sobre la configuración

- La sintaxis exacta de los SMS y los campos soportados pueden variar según la versión de firmware y la personalización del proveedor; confirme siempre el formato de comandos con la documentación de EElink si tiene dudas.
- Para dispositivos que requieren seleccionar un protocolo de transporte, elija UDP o TCP según las indicaciones de red y del proveedor; Plaspy soporta ambos y detecta el protocolo automáticamente en el backend.
- Use el comando SERVER con el dominio d.plaspy.com siempre que sea posible para que DNS resuelva al endpoint actual de Plaspy; la forma con IP 54.85.159.138 se proporciona como alternativa.
- Si configura por SMS, asegúrese de que el dispositivo tenga una SIM operativa y que el plan permita el aprovisionamiento por SMS.
- Tras el aprovisionamiento, valide los reportes usando PARAM# o confirmando que el dispositivo aparece y reporta correctamente en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT18 para reportar a Plaspy ofrece visibilidad centralizada para casos de uso de seguridad personal. Con el dispositivo apuntando a Plaspy, cuidadores y equipos de monitoreo reciben ubicación oportuna, alertas SOS y estados del dispositivo para poder responder rápidamente y mantener supervisión operacional.

Para saber más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para los pasos de instalación más recientes, notas de firmware y orientación del fabricante consulte EElink en https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
