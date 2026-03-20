---
slug: /thingsys/ts_p4s/configuration
id: ts_p4s-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4s Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador ThingSys TS-P4s en Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración ThingSys TS-P4s
  - Instalación TS-P4s
  - Configuración rastreador GPS ThingSys
  - Configuración TS-P4s en Plaspy
  - Configuración de dispositivo Plaspy
  - Configuración servidor rastreador GPS
  - Seguimiento de vehículos TS-P4s
  - Seguimiento de activos TS-P4s
  - Compatibilidad Plaspy TS-P4s
  - Comandos SMS TS-P4s
---

# ThingSys - Configuración del TS-P4s

Esta página describe el contexto público de configuración para usar el rastreador ThingSys TS-P4s con Plaspy. Reúne los ajustes de servidor de Plaspy que usted necesitará y explica los pasos prácticos y los ejemplos de comandos SMS publicados para el TS-P4s, de modo que pueda configurar el dispositivo para reportar a Plaspy en escenarios de flotas o seguimiento de activos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TS-P4s admite configuración por SMS según el material público de ThingSys, incluyendo ejemplos de comandos SMS y una contraseña predeterminada del dispositivo indicada en la documentación pública.

## Resumen de configuración

El objetivo de la configuración es preparar el TS-P4s para que envíe de forma segura y confiable ubicación y telemetría a la plataforma Plaspy. Para el TS-P4s esto suele implicar configurar el APN celular, establecer el servidor y puerto GPRS, y validar que el dispositivo esté reportando datos a Plaspy.

- Configure los ajustes de APN del dispositivo para que el rastreador tenga conectividad de datos móviles para reportes GPRS.
- Establezca el endpoint del servidor para que los reportes se envíen a Plaspy en el servidor y puerto compartidos.
- Elija el transporte (UDP o TCP) si el rastreador requiere una selección de transporte para el envío.
- Aplique y guarde la configuración, luego verifique que el dispositivo se registre y reporte a Plaspy.
- Use los comandos SMS publicados por el fabricante para dispositivos que acepten configuración por aire y conserve los marcadores de posición como [apn] según sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy analizará automáticamente los protocolos telemáticos soportados cuando el rastreador se conecte a la plataforma.

## Requisitos típicos antes de la configuración

- Un TS-P4s encendido y con batería cargada, con una SIM celular activa insertada y con SMS habilitado si la configuración por SMS lo requiere.
- APN, usuario APN y contraseña APN del operador móvil que cubre la ubicación del dispositivo.
- Conocimiento de la contraseña predeterminada del dispositivo si es necesaria para la configuración por SMS (el material público indica una contraseña por defecto 123456).
- Acceso al método de configuración de ThingSys como comandos SMS o herramientas del fabricante según la documentación oficial.
- Una cuenta de Plaspy o credenciales de acceso para verificar la visibilidad del dispositivo en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando el TS-P4s se configura para apuntar al endpoint de Plaspy, envía periódicamente datos de ubicación y telemetría al servidor y puerto compartidos de Plaspy. Plaspy recibe la conexión entrante en el transporte configurado y detecta automáticamente el protocolo para su análisis e ingestión en la plataforma.

- El rastreador reporta posiciones GNSS y marcas de tiempo al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Eventos de telemetría como alarmas de movimiento, alertas de manipulación y nivel de batería se reenvían a Plaspy para alertas y monitoreo.
- El transporte puede ser UDP o TCP según el firmware y configuración del dispositivo; elija el transporte requerido por el TS-P4s y Plaspy gestionará la detección automática del protocolo.
- Plaspy mostrará ubicación en vivo, historial y eventos de alerta una vez que el dispositivo reporte correctamente al servidor y puerto compartidos.

## Flujo de configuración habitual

1. Identifique y acceda al método de configuración ThingSys recomendado para la variante de su TS-P4s (comandos SMS o herramienta del proveedor).
2. Asegúrese de que el dispositivo tenga una SIM activa y que disponga de las credenciales APN.
3. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes del dispositivo.
4. Establezca el puerto en 8888 exactamente como lo requiere Plaspy.
5. Si el dispositivo solicita seleccionar transporte, elija UDP o TCP según las indicaciones del dispositivo.
6. Aplique o guarde la configuración y reinicie el TS-P4s si el equipo requiere un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y sea visible en la plataforma; Plaspy detecta automáticamente el protocolo del rastreador y analizará los mensajes entrantes.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS están publicados en el material de configuración pública de ThingSys para el TS-P4s. Los comandos muestran la contraseña predeterminada del dispositivo 123456 donde se requiere e incluyen marcadores de posición de APN que usted debe reemplazar con los valores de su operador.

- Reset de fábrica inicial opcional (usar solo cuando sea necesario para la puesta en servicio)
```text
FORMAT
```

- Establecer el APN del operador (reemplace [apn] con el APN de su operador)
```text
apn123456 [apn]
```

- Establecer el usuario APN (reemplace [apnu] con su usuario APN si es requerido)
```text
apnuser123456 [apnu]
```

- Establecer la contraseña APN (reemplace [apnp] con su contraseña APN si es requerida)
```text
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS usando la IP y el puerto publicados para Plaspy (este comando usa la forma IP mostrada en el material público)
```text
ip54.85.159.138 8888
```

- Verificar o consultar los ajustes actuales del dispositivo
```text
CXZT
```

Notas sobre los comandos anteriores:
- La contraseña predeterminada del dispositivo mostrada en el material público es 123456; inclúyala donde el dispositivo requiera autenticación en formato SMS.
- Los marcadores de posición [apn], [apnu] y [apnp] deben ser reemplazados por los valores de su operador móvil.
- El ejemplo público usa la IP del servidor 54.85.159.138 y el puerto 8888. Si su dispositivo admite nombres de dominio y el fabricante documenta esa opción, puede usar d.plaspy.com con el mismo puerto; de lo contrario use la forma IP provista por ThingSys.

## Notas de configuración

- Las variantes de firmware y región pueden cambiar los comandos SMS disponibles y la sintaxis exacta de los comandos. Confirme los comandos con la documentación actual de ThingSys para el firmware de su dispositivo.
- La configuración por SMS está disponible en el material publicado para el TS-P4s; verifique que la SIM soporte SMS en su región.
- Elija UDP o TCP conforme a las indicaciones del firmware del dispositivo. Plaspy soporta ambos transportes y realiza detección automática del protocolo en las conexiones entrantes.
- Mantenga las credenciales APN correctas y pruebe la conectividad GPRS antes de depender del reporte del dispositivo a Plaspy.
- Si realiza un reset de fábrica, trate ese paso como opcional y solo úselo durante la puesta en servicio inicial o al solucionar problemas.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys TS-P4s con Plaspy ofrece una opción práctica y de bajo mantenimiento para el seguimiento a largo plazo de activos y vehículos. El TS-P4s está diseñado para despliegues extendidos y, al apuntarlo a Plaspy usando el servidor y puerto compartidos, entrega eventos de ubicación y alarma en los paneles de Plaspy para monitoreo, alertas y revisión histórica. Para flotas y operaciones que requieren instalaciones sin supervisión o discretas, la combinación de hardware robusto y la visibilidad en Plaspy apoya la conciencia operativa y respuestas oportunas.

Para saber más sobre Plaspy y cómo gestiona las conexiones de dispositivos y los flujos de trabajo de gestión de flotas, visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, diferencias de firmware y detalles técnicos del TS-P4s, confirme la información actual en la página del fabricante https://www.thingsys.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
