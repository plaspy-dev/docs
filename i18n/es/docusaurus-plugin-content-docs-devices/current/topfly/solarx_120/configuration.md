---
slug: /topfly/solarx_120/configuration
id: solarx_120-configuration
sidebar_label: Configuration
title: TopFly - SolarX 120 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar TopFly SolarX 120 para Plaspy con ajustes públicos, comandos SMS y pasos prácticos
keywords:
  - configuración TopFly SolarX 120
  - instalación TopFly SolarX 120
  - configuración SolarX 120 Plaspy
  - ajustes servidor SolarX 120
  - configuración rastreador GPS SolarX 120
  - configuración rastreador GPS TopFly
  - configuración dispositivo Plaspy
  - rastreador de activos SolarX 120
  - configuración SMS SolarX 120
  - guía despliegue SolarX 120
---

# TopFly - Configuración SolarX 120

Esta página describe el contexto de configuración pública para usar el TopFly SolarX 120 con Plaspy. Se concentra en los pasos prácticos y en los ajustes públicos que deberá aplicar para dirigir el dispositivo a Plaspy y habilitar la telemetría y el reporte de ubicación. Cuando estén disponibles, se incluyen ejemplos de comandos SMS del fabricante para ilustrar cómo aplicar las configuraciones aquí descritas.

Plaspy utiliza un endpoint y puerto compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la revisión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; por ello, siga estos ajustes públicos junto con la documentación oficial de TopFly y cualquier utilidad de configuración proporcionada por el vendedor.

## Resumen de configuración

El objetivo de este proceso de configuración es preparar el SolarX 120 para que envíe posiciones GNSS y telemetría de sensores BLE a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Para el SolarX 120, las acciones públicas comunes incluyen comandos por SMS o el software del proveedor para ajustar el APN, la dirección del servidor y la frecuencia de reporte.

- Apunte el dispositivo al dominio o IP del servidor de Plaspy y utilice el puerto compartido de Plaspy para que la plataforma reciba la telemetría.
- Configure las credenciales APN del dispositivo para que el rastreador pueda establecer una sesión de datos celular para cargas GPRS/LTE.
- Seleccione UDP o TCP si el dispositivo requiere elegir transporte y ajuste el puerto al puerto de Plaspy.
- Defina un intervalo de reporte adecuado para su despliegue y confirme el comportamiento de almacenamiento en búfer en campo.
- Valide la conectividad y la telemetría en Plaspy una vez que el dispositivo esté en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP pueden usarse en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para telemetría y reportes

## Requisitos típicos antes de la configuración

- Un SolarX 120 con batería cargada y una SIM celular activa con capacidad de datos y SMS según se requiera.
- Credenciales APN del operador móvil para permitir que el rastreador establezca una sesión de datos.
- Acceso a la interfaz SMS del dispositivo o al software oficial de configuración de TopFly proporcionado por el vendedor.
- Conocimiento de la contraseña del dispositivo si los comandos SMS la requieren (la contraseña de ejemplo habitual en ejemplos públicos es 0000).
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo aparece y reporta correctamente.
- Herramientas básicas de campo para reiniciar o cortar la alimentación del dispositivo si es necesario durante la configuración.

## Cómo este rastreador se conecta a Plaspy

El SolarX 120 se configura para reportar posiciones GNSS y telemetría de sensores BLE al endpoint y puerto compartido de Plaspy. En cobertura normal, el dispositivo sube ubicación y datos de sensores en tiempo real; cuando no hay cobertura, almacena los datos localmente y carga los puntos guardados cuando se restablece la conectividad.

- El rastreador envía posiciones GNSS a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.
- La telemetría de sensores BLE y los eventos de sensores internos (por ejemplo temperatura, humedad o estado de puerta) se reenvían a Plaspy a través del mismo endpoint del servidor.
- Las cargas de datos en búfer ocurren cuando el dispositivo recupera la conectividad de red para preservar los registros históricos de recorridos.
- Las alertas por movimiento, extracción u otros eventos se envían a Plaspy para el manejo basado en reglas y la supervisión operativa.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que una configuración correcta de servidor y puerto suele permitir a la plataforma interpretar los mensajes entrantes.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopFly o al software del proveedor, o prepárese para enviar comandos SMS según la documentación de TopFly.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor/host.
3. Configure el puerto del dispositivo en 8888; recuerde que Plaspy usa el mismo puerto en todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN y las credenciales APN para que el dispositivo pueda establecer conectividad de datos celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado del dispositivo y la telemetría reciente en la plataforma.

## Comandos de configuración de ejemplo

El fabricante proporciona un conjunto de comandos SMS para la configuración pública básica. Los comandos de ejemplo a continuación usan la contraseña de muestra del dispositivo 0000. Preserve y reemplace los marcadores donde se indica.

- Establecer la zona horaria a UTC+0
```text
GMT,0000,0#
```

- Establecer el APN del operador (se muestran marcadores)
```text
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] = nombre APN proporcionado por su operador móvil
- [apnu] = nombre de usuario APN si el operador lo requiere; deje en blanco si no se usa
- [apnp] = contraseña APN si el operador la requiere; deje en blanco si no se usa

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
IP,0000,54.85.159.138 8888#
```

- Establecer el intervalo de reporte (el ejemplo fija 60 segundos)
```text
TIMER,0000,60:60:0:0#
```

Notas sobre los comandos:
- Estos comandos se envían por SMS al dispositivo usando la contraseña del dispositivo (la contraseña de ejemplo pública es 0000). Cambie la contraseña por defecto después de la configuración si su dispositivo lo permite.
- Mantenga el orden de los comandos cuando el fabricante indique que se requiere un orden (por ejemplo APN antes del servidor y los ajustes de timer).
- Si su despliegue o firmware requiere una sintaxis diferente, use la documentación oficial de TopFly o las herramientas del proveedor.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las funciones disponibles; confirme siempre con las notas de la versión del fabricante.
- El SolarX 120 admite configuración por SMS como se muestra, pero muchas instalaciones usarán software del proveedor o una herramienta de provisión OTA cuando esté disponible.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del firmware; el comportamiento puede diferir entre transportes.
- Debido a que Plaspy utiliza un puerto compartido y detección automática de protocolo, los elementos críticos son la dirección correcta del servidor, el puerto y las credenciales APN válidas.
- Cambie las contraseñas por defecto del dispositivo cuando sea posible y guarde las credenciales de forma segura.

## Por qué usar Plaspy con esta configuración

Usar el SolarX 120 con Plaspy ofrece visibilidad continua para activos pesados, combinando hardware robusto con asistencia solar y una plataforma que acepta telemetría estandarizada en un endpoint compartido. Esta configuración permite seguimiento en tiempo real, cargas en búfer durante cortes de conectividad e integración de telemetría de sensores para monitoreo ambiental y flujos de trabajo anti-robo.

Para conocer más sobre Plaspy e integraciones de dispositivos soportados visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información de configuración más reciente en el sitio del fabricante https://www.topflytech.com/ antes de finalizar un despliegue.
