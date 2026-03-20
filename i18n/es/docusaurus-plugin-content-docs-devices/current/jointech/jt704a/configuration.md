---
slug: /jointech/jt704a/configuration
id: jt704a-configuration
sidebar_label: Configuration
title: Jointech - JT704A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Jointech JT704A para integrarlo con Plaspy, con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Jointech JT704A
  - Instalación Jointech JT704A
  - Configuración JT704A en Plaspy
  - Configuración de servidor JT704A
  - Configuración del rastreador Jointech
  - Configuración GPS JT704A
  - Configuración rastreador de contenedores
  - Configuración para cadena de frío
  - Configuración de rastreo de flotas
  - Integración GPS con Plaspy
---

# Jointech - Configuración del JT704A

Esta página describe el contexto público de configuración para usar el rastreador Jointech JT704A con Plaspy. Explica los ajustes compartidos del servidor que Plaspy requiere, describe el flujo práctico de configuración y presenta los comandos SMS de ejemplo disponibles públicamente para apuntar el dispositivo al servidor de Plaspy. Use esta guía junto con los materiales oficiales de Jointech para los pasos concretos en el dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el equipo del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El JT704A puede configurarse por SMS para los parámetros de servidor y APN; esta página se centra en los valores públicos y los pasos prácticos necesarios para que el rastreador reporte datos a Plaspy.

## Resumen de configuración

Preparar un JT704A para su uso con Plaspy consiste principalmente en configurar el endpoint del servidor GPRS y el APN para que el dispositivo pueda enviar telemetría a Plaspy, validar la conectividad y confirmar que el dispositivo aparece en la plataforma. Cuando el JT704A esté configurado para reportar a Plaspy enviará ubicación y telemetría ambiental al endpoint y puerto comunes de Plaspy.

- Configure el equipo para que apunte al endpoint del servidor de Plaspy y así los datos se enruten a la plataforma.  
- Establezca el APN correcto (y usuario/clave del APN si aplica) para que el dispositivo pueda iniciar sesión GPRS.  
- Seleccione UDP o TCP en el dispositivo si es necesario y ajuste el puerto al puerto compartido de Plaspy.  
- Valide que el rastreador informa a Plaspy y que la ubicación y la telemetría de sensores son visibles.  
- Conserve el ID del dispositivo al enviar comandos SMS para que se actualice la unidad correcta.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Transport support UDP or TCP on port 8888 (device may be configured to use either)  
- Automatic protocol detection in Plaspy means the platform will detect the tracker protocol once data arrives

## Requisitos típicos antes de la configuración

- Una unidad JT704A cargada e instalada con un ID de dispositivo disponible para usar en los comandos SMS.  
- Una tarjeta SIM activa provisionada para datos por paquete y SMS si va a configurar el dispositivo mediante SMS.  
- El APN correcto de su operador móvil; usuario y contraseña del APN si el operador los requiere.  
- Acceso a la guía de configuración de Jointech o a su herramienta de instalación para referencia de pasos específicos del dispositivo.  
- Un método para recibir confirmación de que el rastreador está en línea, ya sea mediante respuestas SMS o verificando la lista de dispositivos en Plaspy.  
- Conocimientos básicos sobre si su instalación requiere UDP o TCP como transporte.

## Cómo se conecta este rastreador a Plaspy

El JT704A se configura para enviar su posición y datos de sensores al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría. Una vez que el rastreador establece correctamente una sesión GPRS y se conecta a Plaspy, la plataforma detectará automáticamente el protocolo y comenzará a parsear datos de posición, ambientales y de eventos.

- El dispositivo envía paquetes de telemetría periódicos o en tiempo real al servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo y consideraciones de red.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint se pueden usar entre distintos dispositivos.  
- La telemetría que llega a Plaspy queda disponible para alertas, geovallas e informes históricos.  
- Las lecturas de sensores del JT704A, como temperatura, humedad y nivel de luz, se reenvían a Plaspy junto con las actualizaciones de posición.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Jointech o al software recomendado para el JT704A, o prepárese para enviar comandos SMS si va a configurar por SMS.  
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Establezca el puerto en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en el dispositivo si es necesario elegir el transporte.  
5. Configure el APN y, si corresponde, el usuario y la contraseña del APN para que el dispositivo pueda iniciar la conexión GPRS.  
6. Aplique o guarde la configuración y reinicie el equipo si el procedimiento del fabricante lo requiere.  
7. Valide que el equipo reporte a Plaspy verificando el estado del dispositivo y la visibilidad de la telemetría en la plataforma.

## Ejemplos de comandos de configuración

Para configurar el JT704A mediante SMS, envíe los comandos SMS específicos del dispositivo con el ID correcto. Escriba el ID del dispositivo donde aparece {{trackerID}}. Los comandos abajo están presentados en el mismo orden que la guía pública del fabricante.

1. Establecer servidor GPRS y APN
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```
- Reemplace {{trackerID}} por el ID del dispositivo impreso en su unidad o suministrado por el fabricante.  
- Reemplace {{apn}} por la cadena APN de su operador.

2. (Opcional) Establecer usuario y contraseña del APN si su operador los requiere
```text
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```
- Reemplace {{apnu}} y {{apnp}} con el usuario y la contraseña del APN si aplica.  
- Este comando solo es necesario cuando su operador SIM requiere autenticación. Si no es necesario, omita este paso.

Nota: Estos comandos SMS son ejemplos públicos para configurar el servidor GPRS y el APN. Use el formato exacto requerido por el firmware de su dispositivo y confirme cualquier diferencia con la documentación de Jointech.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato exacto de los comandos SMS o el orden de los parámetros; confirme siempre con el manual del dispositivo de su unidad.  
- Usar UDP o TCP puede comportarse de forma diferente en redes móviles; pruebe ambos transportes si experimenta problemas de conectividad.  
- La configuración por SMS está soportada como se muestra en los comandos de ejemplo, pero las herramientas del fabricante o servicios de aprovisionamiento pueden ofrecer métodos alternativos.  
- Mantenga el ID del dispositivo correcto en cada comando SMS para que la unidad prevista reciba la configuración.  
- El enfoque de puerto compartido de Plaspy y la detección automática de protocolo simplifican la configuración del servidor, pero dependen de ajustes correctos en el dispositivo para establecer la conectividad.

## Por qué usar Plaspy con esta configuración

Integrar el Jointech JT704A con Plaspy ofrece una forma directa de recopilar telemetría de larga duración sobre ubicación y parámetros ambientales para operaciones de contenedores y cadena de frío. El diseño de bajo consumo y la capacidad de posicionamiento multimodo del JT704A lo hacen apto para despliegues prolongados, mientras que Plaspy centraliza alertas, historial y monitoreo para que los equipos operativos respondan eficazmente a eventos de ubicación y sensores.

Para saber más sobre Plaspy y cómo procesa los datos de los dispositivos visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la información vigente en el sitio de Jointech https://www.jointcontrols.com/ en las páginas del modelo y recursos de soporte.
