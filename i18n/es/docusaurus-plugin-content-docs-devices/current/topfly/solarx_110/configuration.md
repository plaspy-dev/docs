---
slug: /topfly/solarx_110/configuration
id: solarx_110-configuration
sidebar_label: Configuration
title: TopFly - SolarX 110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopFly SolarX 110 y conectarlo a Plaspy usando servidor compartido y SMS o herramientas del equipo
keywords:
  - configuración TopFly SolarX 110
  - configuración inicial TopFly SolarX 110
  - configuración SolarX 110 para Plaspy
  - configuración de servidor SolarX 110
  - configuración del rastreador GPS SolarX 110
  - rastreador TopFly Plaspy
  - ajustes APN SolarX 110
  - comandos SMS SolarX 110
  - seguimiento de flotas SolarX 110
  - configuración del dispositivo SolarX 110
---

# TopFly - SolarX 110 Configuración

Esta página resume el contexto público de configuración para usar el TopFly SolarX 110 con Plaspy. Se centra en los ajustes prácticos del lado de la plataforma y en los comandos del fabricante que están disponibles públicamente para enviar los datos del dispositivo al endpoint de Plaspy. Use esta guía para preparar el rastreador y establecer comunicación con Plaspy antes de completar el registro y la visibilidad del dispositivo en su cuenta Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante varían según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SolarX 110 admite métodos de configuración por SMS y GPRS comúnmente usados en campo; siga las instrucciones del fabricante para su revisión de hardware y verifique los comandos con la documentación de TopFly.

## Resumen de configuración

El objetivo de la configuración es dejar el SolarX 110 listo para enviar posiciones GNSS y telemetría a Plaspy de forma fiable, y validar la conectividad y el reporte una vez aplicados los ajustes. A continuación se presentan los objetivos prácticos del proceso de configuración.

- Configurar el APN y el acceso a la red para que haya datos GPRS o LTE disponibles para el envío de información.
- Apuntar el dispositivo al endpoint y puerto del servidor de Plaspy para que los datos lleguen a su cuenta.
- Ajustar los intervalos y el comportamiento de reporte para que coincidan con las necesidades operativas y equilibrar el consumo de energía en operación solar.
- Verificar que el dispositivo reporte a Plaspy y confirmar que la ubicación, la batería y la telemetría de sensores sean visibles.
- Asegurar o cambiar la contraseña del dispositivo respecto al valor de fábrica tras la configuración inicial, cuando sea posible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte requerido por el dispositivo o la red
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos previos antes de la instalación

- Un SolarX 110 cargado con suficiente energía solar o de batería e instalación de la tarjeta SIM para datos móviles
- Datos del APN del operador, incluyendo nombre del APN y, si aplica, usuario y contraseña
- Acceso al método de configuración que soporte su unidad, por ejemplo configuración por SMS o la herramienta de configuración de TopFly
- Conocimiento de la contraseña predeterminada del dispositivo (en el ejemplo público se usa 0000 como valor de fábrica)
- Cobertura básica en la red del operador (GPRS/LTE) para que el equipo pueda alcanzar Plaspy en el endpoint configurado
- Una cuenta Plaspy y el flujo de registro del dispositivo listos para recibir y verificar el rastreador cuando empiece a reportar

## Cómo este rastreador se conecta a Plaspy

El SolarX 110 se configura para enviar posiciones GNSS, telemetría y datos de sensores accesorios al endpoint del servidor de Plaspy en el puerto compartido. Una vez apuntado a Plaspy, el dispositivo envía su ubicación y estados por el transporte seleccionado y Plaspy ingiere y muestra esos eventos para monitoreo y alertas.

- El dispositivo transmite GNSS y telemetría al endpoint d.plaspy.com o a la IP 54.85.159.138
- Los reportes se envían al puerto 8888 que Plaspy usa para todos los dispositivos compatibles
- El transporte puede ser UDP o TCP según la configuración del dispositivo y los requisitos de la red
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor
- Una vez conectado, puede validar actualizaciones en tiempo real, eventos de alarma y recorridos históricos dentro de Plaspy

## Flujo de configuración típico

1. Acceda al método de configuración oficial de TopFly para su SolarX 110 (comandos SMS, herramienta del dispositivo o software TopFly) según lo documentado por el fabricante.
2. Ingrese el dominio o la IP del servidor Plaspy — d.plaspy.com o 54.85.159.138 — en el campo de servidor o IP del equipo.
3. Establezca el puerto del servidor en 8888, que coincide con el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo exige seleccionar un transporte para el envío de datos.
5. Configure el APN y las credenciales necesarias de su operador móvil para que el rastreador pueda alcanzar Plaspy vía datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy confirmando la llegada de ubicaciones y telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El SolarX 110 admite configuración por SMS según ejemplos públicos. Los comandos de muestra abajo usan la contraseña del dispositivo 0000 como valor de fábrica. Reemplace los marcadores antes de enviar.

- Establecer la zona horaria del dispositivo a UTC 0
```sms
GMT,0000,0#
```

- Configurar el APN del operador (reemplace los marcadores según corresponda)
```sms
APN,0000,[apn],[apnu],[apnp]#
```
Explicación de los marcadores:
- [apn] = nombre del APN proporcionado por su operador móvil
- [apnu] = nombre de usuario del APN si el operador lo requiere (dejar vacío u omitir si no es necesario)
- [apnp] = contraseña del APN si el operador lo requiere (dejar vacío u omitir si no es necesario)

- Establecer el servidor GPRS a Plaspy por IP y puerto
```sms
IP,0000,54.85.159.138 8888#
```
Este comando apunta el rastreador directamente a la IP y el puerto del servidor Plaspy. También puede configurar el dominio d.plaspy.com si el dispositivo acepta una cadena de dominio en lugar de una IP.

- Establecer el intervalo de reporte/actualización a 60 segundos
```sms
TIMER,0000,60:60:0:0#
```
Este ejemplo configura el comportamiento de reporte del dispositivo; adapte el intervalo a sus necesidades operativas y al presupuesto de energía.

Nota: El orden anterior es importante para la conectividad inicial: primero APN, luego servidor y finalmente intervalo de reporte. Tras enviar los SMS, permita un breve periodo para que el dispositivo se registre en la red y comience a reportar.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique los comandos según la versión de firmware del dispositivo.
- La configuración por SMS es un método común en campo para dispositivos SolarX 110 y resulta útil cuando no hay acceso directo por USB o software.
- Elija TCP o UDP según la fiabilidad de la red y su preferencia; Plaspy aceptará datos en el puerto 8888 y detectará automáticamente el protocolo.
- Confirme las credenciales APN con el operador móvil; ajustes APN incorrectos son una causa frecuente de fallas de conectividad.
- Reemplace la contraseña de fábrica 0000 tras la configuración inicial cuando sea posible para mejorar la seguridad del dispositivo.

## Por qué usar Plaspy con esta configuración

Emparejar el SolarX 110 con Plaspy ofrece a los equipos operativos una solución práctica y resistente para el rastreo de activos solares en exteriores. La larga autonomía de la batería del SolarX 110, su GNSS multiconstelación y el almacenamiento en búfer complementan la ingestión centralizada y la visualización de Plaspy, permitiendo seguimiento en tiempo real fiable, gestión de alarmas y reproducción histórica de rutas para contenedores, semirremolques y equipos remotos.

Para saber más sobre Plaspy y cómo la plataforma gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante del SolarX 110, verifique la información en el sitio de TopFly https://www.topflytech.com/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
