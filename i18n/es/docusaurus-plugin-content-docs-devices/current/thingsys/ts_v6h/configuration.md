---
slug: /thingsys/ts_v6h/configuration
id: ts_v6h-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6H Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica de configuración del tracker ThingSys TS-V6H con ajustes de servidor Plaspy y comandos SMS
keywords:
- Configuración ThingSys TS-V6H
- Configuración TS-V6H
- Configuración de tracker GPS ThingSys
- Configuración TS-V6H Plaspy
- Configuración de tracker Plaspy
- Configuración tracker GPS vehicular
- Configuración tracker para gestión de flotas
- Ajustes de servidor TS-V6H
- Configuración SMS TS-V6H
- Configuración tracker GPRS
---

# ThingSys - Configuración del TS-V6H

Esta página presenta el contexto público de configuración para usar el tracker GPS ThingSys TS-V6H con la plataforma Plaspy. Incluye los ajustes de servidor prácticos y ejemplos de comandos SMS publicados para el modelo, de modo que usted pueda preparar el dispositivo para el reporte en vivo hacia Plaspy. El TS-V6H soporta reporte por GPRS y configuración por SMS, y sus características telemétricas principales —como detección de ignición ACC, alertas por vibración y batería de respaldo— se describen en la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; tome los ejemplos de comandos SMS aquí como una guía pública y típica y verifique el flujo exacto para su hardware y versión de firmware.

## Visión general de la configuración

El objetivo de la configuración es preparar el TS-V6H para que reporte de forma fiable la ubicación y el estado a Plaspy mediante GPRS, con SMS como respaldo, y confirmar que el dispositivo sea visible en la plataforma Plaspy. Los pasos prácticos aseguran que el tracker apunte a los endpoints de Plaspy, use el puerto y transporte requeridos, y que la conectividad quede validada tras la instalación.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que la ubicación y la telemetría se entreguen a Plaspy.
- Configurar las credenciales APN de la operadora y asegurarse de que la SIM tenga servicios de datos y SMS.
- Elegir el método de transporte soportado por su firmware y confirmar que use el puerto 8888 de Plaspy.
- Validar la conectividad y confirmar que el dispositivo aparezca en la plataforma Plaspy y reporte telemetría.
- Utilizar comandos SMS si no puede acceder al dispositivo mediante una herramienta local o cuando el acceso del instalador sea limitado.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com debe ingresarse en el dispositivo o en los ajustes del operador cuando sea compatible.  
- La IP del servidor 54.85.159.138 es la dirección endpoint de Plaspy disponible para la configuración del tracker.  
- El puerto 8888 es el puerto usado por Plaspy para todos los dispositivos soportados. Todos los dispositivos en Plaspy usan el mismo puerto.  
- El transporte admite UDP o TCP; el TS-V6H puede configurarse usando UDP o TCP en el puerto 8888 según las opciones del firmware.  
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta, de modo que la plataforma puede ingerir los datos sin selección manual de protocolo en el servidor.

## Requisitos previos típicos

- Una unidad TS-V6H con alimentación y la instalación del fabricante completada, con el cableado correcto a la alimentación del vehículo.  
- Una tarjeta SIM activa con datos y SMS habilitados y saldo suficiente para la configuración inicial y el reporte.  
- Acceso al número telefónico del dispositivo o a la herramienta del instalador necesaria para enviar comandos SMS de configuración.  
- Conocimiento de la contraseña por defecto del equipo si es requerida para comandos SMS o herramientas del fabricante. El ejemplo público usa 123456 como contraseña por defecto del dispositivo.  
- Documentación del fabricante o acceso a la herramienta de configuración para comandos y comportamiento específicos del firmware.

## Cómo se conecta este tracker a Plaspy

Cuando se configura para usar Plaspy, el TS-V6H reporta posición y estado del dispositivo al endpoint de servidor compartido de Plaspy en el puerto compartido. Plaspy ingiere estos mensajes y ofrece mapeo en vivo, alertas y reportes históricos para monitoreo de flotas y flujos de trabajo anti-robo.

- El dispositivo envía mensajes GPRS a d.plaspy.com o a la IP de Plaspy 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las capacidades del firmware.  
- Plaspy detecta automáticamente el protocolo del tracker para que la plataforma pueda parsear los mensajes entrantes.  
- Eventos como encendido/apagado de ignición, alertas por vibración y notificaciones de pérdida de energía se reportan a Plaspy para reglas y alertas.  
- SMS sigue disponible como método de respaldo para consultas de ubicación o configuración fuera de banda cuando sea necesario.

## Flujo de trabajo típico de configuración

1. Acceda al método u software oficial de configuración de ThingSys para el TS-V6H, o prepárese para enviar comandos SMS de configuración publicados por el fabricante.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o use la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del servidor en 8888, que es el puerto estándar que Plaspy utiliza para todos los trackers compatibles.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte; seleccione el recomendado por su firmware o la guía del instalador.  
5. Configure las credenciales APN y cualquier nombre de usuario y contraseña requeridos para que el dispositivo establezca una sesión de datos GPRS.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar cambios.  
7. Verifique que el dispositivo reporte correctamente a Plaspy revisando la lista de dispositivos y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El TS-V6H puede configurarse mediante comandos SMS. Los siguientes comandos públicos son los publicados por el fabricante como ejemplos de mensajes SMS. La configuración de ejemplo usa la contraseña por defecto del dispositivo 123456 cuando se indica. Conserve los marcadores de posición al enviar valores reales.

- Comando de restauración de fábrica (paso inicial opcional para volver a valores por defecto)
```text
FORMAT
```
- Establecer el APN del operador
```text
apn123456 [apn]
```
- Establecer el usuario del APN
```text
apnuser123456 [apnu]
```
- Establecer la contraseña del APN
```text
apnpasswd123456 [apnp]
```
- Configurar el servidor GPRS a la IP de Plaspy con puerto 8888
```text
ip54.85.159.138 8888
```
- Comprobar ajustes actuales (comando de verificación)
```text
CXZT
```

Notas sobre los marcadores de posición y uso
- [apn] reemplace por la cadena APN de su operadora móvil.  
- [apnu] reemplace por el usuario del APN si su operador lo requiere; de lo contrario deje en blanco u omita según el manual del dispositivo.  
- [apnp] reemplace por la contraseña del APN si es requerida.  
- La contraseña por defecto mostrada en ejemplos públicos es 123456 cuando la sintaxis del comando requiere un prefijo de contraseña. Confirme la contraseña actual de su dispositivo antes de enviar comandos.  
- Envíe estos comandos SMS al número telefónico del dispositivo tal como se describe en la documentación de ThingSys para configuración por SMS.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre consulte las notas de la versión del firmware del dispositivo.  
- Las prácticas del instalador varían por región y proveedor; algunos instaladores prefieren usar una herramienta de configuración local en lugar de SMS para despliegues en lote.  
- Elegir UDP o TCP depende del firmware y de la fiabilidad de la red; UDP es común por su menor overhead mientras que TCP puede elegirse donde la confirmación de entrega sea importante.  
- La configuración por SMS es soportada y resulta útil para configuraciones remotas, pero asegúrese de la entrega de SMS y del éxito del comando comprobando la respuesta del dispositivo o usando el comando de verificación CXZT.  
- Recuerde que Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, por lo que la configuración del lado servidor en Plaspy es uniforme.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys TS-V6H con Plaspy ofrece un camino directo hacia visibilidad vehicular en tiempo real, alertas por manipulación y pérdida de energía, y monitoreo operativo de flotas. La combinación de reporte por GPRS con respaldo por SMS y las entradas de dispositivo para ignición y detección de vibración hacen que el TS-V6H sea adecuado para despliegues en flotas, alquileres y soluciones de seguridad donde se requiere seguimiento continuo y alertas basadas en eventos.

Para saber más sobre Plaspy, visite https://www.plaspy.com y revise las características de la plataforma, opciones de incorporación y listas de dispositivos soportados. Para los comandos de configuración más recientes por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información de configuración en el sitio oficial de ThingSys https://www.thingsys.com/ ya que los métodos y la sintaxis de comandos del fabricante pueden cambiar con el tiempo.
