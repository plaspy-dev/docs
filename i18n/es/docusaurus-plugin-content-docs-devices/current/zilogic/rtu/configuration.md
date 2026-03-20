---
slug: /zilogic/rtu/configuration
id: rtu-configuration
sidebar_label: Configuration
title: Zilogic - RTU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el RTU Zilogic y conectarlo con Plaspy, con ajustes de servidor, comandos SMS y flujo de configuración
keywords:
  - Configuración RTU Zilogic
  - Instalación RTU Zilogic
  - RTU Zilogic Plaspy
  - Configuración BlackKite RTU
  - Configuración servidor RTU
  - Configuración rastreador GPS RTU
  - Monitoreo remoto RTU
  - Configuración GPRS RTU
  - Configuración plataforma GPS RTU
  - Configuración software rastreo RTU
---

# Zilogic - Configuración RTU

Esta página documenta el contexto público de configuración para usar el RTU Zilogic (también conocido como BlackKite-RTU) con Plaspy. Se centra en los pasos prácticos y en los ajustes de servidor que deberá aplicar para dirigir el dispositivo hacia Plaspy y permitir que el RTU envíe telemetría y alertas a la plataforma. Se usan únicamente valores públicos de Plaspy y el flujo de comandos SMS públicamente compartido por el fabricante cuando está disponible.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El RTU soporta protocolos listos para la nube como HTTP y MQTT, y el dispositivo puede configurarse por SMS para un reporte GPRS básico tal como se muestra en los comandos públicos a continuación.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el RTU para comunicarse de forma fiable con Plaspy, validar la conectividad y habilitar la visibilidad dentro de la plataforma. Para los modelos RTU que soportan configuración por SMS, el fabricante ofrece un conjunto sencillo de comandos de texto para cambiar el APN, servidor, intervalos de reporte y guardar ajustes.

- Configure el RTU con el APN del operador y las credenciales para que cuente con conectividad de datos para reportes GPRS.
- Apunte el dispositivo a los ajustes de servidor de Plaspy (dominio o IP) y al puerto compartido que usa Plaspy.
- Seleccione el transporte (UDP o TCP) si el equipo requiere elegirlo.
- Establezca intervalos de reporte adecuados según sus necesidades de monitoreo y su plan de datos.
- Guarde y verifique la configuración mediante comandos de consulta del dispositivo o una comprobación de estado.
- Confirme que el RTU aparece y reporta correctamente en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y que detectará automáticamente el protocolo que su RTU emplee al reportar al endpoint compartido.

## Requisitos típicos antes de la configuración

- Un RTU Zilogic con alimentación y accesible, con firmware que soporte SMS o la herramienta de configuración del fabricante.
- Una tarjeta SIM con datos móviles habilitados y credenciales APN correctas del operador.
- Acceso al método de configuración soportado por la unidad, ya sea comandos SMS o el software del proveedor.
- Conocimiento de los valores APN, incluyendo usuario y contraseña cuando el operador los exige.
- Una cuenta en Plaspy y la capacidad para identificar el dispositivo en Plaspy una vez que empiece a reportar.
- Opcional: antena GPS y ubicación adecuada si piensa usar las funciones de reporte de ubicación del RTU.

## Cómo se conecta este tracker a Plaspy

El RTU se configura para enviar telemetría y alertas al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir los datos del dispositivo y mostrarlos en la plataforma. La comunicación suele realizarse por GPRS celular para este modelo cuando se usa la configuración por SMS que se muestra abajo.

- El dispositivo utiliza las credenciales APN configuradas para establecer una sesión de datos GPRS.
- El RTU se apunta a d.plaspy.com o directamente a 54.85.159.138 y al puerto 8888 para el reenvío al servidor.
- El transporte puede ajustarse a UDP o TCP según el soporte del dispositivo y las consideraciones de la red.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llegan mensajes al puerto compartido.
- El estado del dispositivo, la telemetría periódica y las alertas de eventos se reenvían a Plaspy para monitoreo e informes.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Zilogic, como la interfaz de comandos SMS o el software del proveedor, según lo documentado por Zilogic.
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Establezca el puerto del dispositivo a 8888, que es el puerto compartido que Plaspy utiliza para todos los trackers compatibles.
4. Elija UDP o TCP como transporte si su equipo requiere seleccionar uno.
5. Configure el APN y las credenciales del operador para que el RTU pueda abrir una sesión GPRS.
6. Aplique o guarde la configuración en el RTU y reinicie el dispositivo si el firmware lo requiere.
7. Valide que el dispositivo informe a Plaspy revisando el estado en Plaspy y usando comandos de consulta del dispositivo cuando estén disponibles.

Si usa la configuración por SMS, los comandos de ejemplo a continuación siguen el orden público recomendado por el fabricante.

## Ejemplo de comandos de configuración

El RTU Zilogic puede configurarse enviando comandos SMS en secuencia. A continuación están los comandos SMS compartidos públicamente y las consultas de verificación en el orden indicado por el fabricante. Preserve los marcadores de posición cuando sustituya sus valores del operador.

- Ajustar la zona horaria a UTC 0
```
SET TZ +00:00
```

- Configurar el APN del operador y el usuario/contraseña opcionales
```
SET APN [apn],[apnu],[apnp]
```
Explicación: [apn] es el nombre del APN del operador. [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Si su operador no requiere usuario o contraseña, deje esos marcadores vacíos u omítalos según el manual del dispositivo.

- Establecer el servidor GPRS usando la IP y puerto de Plaspy
```
SET SERVER 54.85.159.138,8888
```
También puede ingresar d.plaspy.com en lugar de la IP si el RTU soporta nombres de dominio para la configuración del servidor.

- Cambiar el dispositivo al modo de reporte GPRS
```
SET GPRS 1
```

- Establecer el intervalo de actualización periódico para los reportes
```
SET PERIOD 60,60
```
Explicación: Este ejemplo fija valores de intervalo. Consulte el manual del dispositivo para el significado de cada parámetro; el RTU soporta intervalos configurables y puede ajustarse a sus necesidades de reporte.

- Guardar ajustes en el almacenamiento persistente
```
SAVE
```

Para verificar la configuración y el estado después de los cambios, envíe estas consultas:
```
GET APN
GET GPRS
GET SERVER
STATUS
```

Envíe estos comandos SMS desde un número autorizado o mediante la herramienta del proveedor según se requiera. Las restricciones sobre el origen del SMS y la autorización de comandos dependen del firmware del RTU y de las configuraciones del fabricante.

## Notas de configuración

- La configuración por SMS es un método público soportado para el RTU, pero en algunas instalaciones puede preferirse el software del proveedor o una conexión directa si están disponibles.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme el conjunto exacto de comandos con la documentación de Zilogic para su unidad.
- Elija UDP o TCP según la fiabilidad de la red y las necesidades de la aplicación; Plaspy soporta ambos transportes y detecta automáticamente el protocolo en el servidor.
- Plaspy utiliza el mismo puerto 8888 para simplificar la provisión de dispositivos y la detección automática de protocolo.
- Mantenga las credenciales APN actualizadas y verifique que la SIM tenga datos habilitados antes de intentar cambiar al modo GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el RTU Zilogic para reportar a Plaspy otorga a las organizaciones visibilidad centralizada de dispositivos y activos remotos. Plaspy recoge la telemetría entrante y los mensajes de eventos del RTU, permitiendo monitoreo, alertas e integración con flujos operativos, además de aprovechar los intervalos de reporte configurables del RTU y el almacenamiento en el dispositivo durante cortes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles específicos y actualizados sobre la configuración del dispositivo, la sintaxis de comandos y el comportamiento del firmware, consulte los recursos oficiales de Zilogic en https://zilogic.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
