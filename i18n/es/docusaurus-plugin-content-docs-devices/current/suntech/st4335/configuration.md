---
slug: /suntech/st4335/configuration
id: st4335-configuration
sidebar_label: Configuration
title: Suntech - ST4335 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST4335 para reportar a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Suntech ST4335
  - Instalación Suntech ST4335
  - Configuración servidor ST4335
  - Configuración SMS ST4335
  - GPS Suntech Plaspy
  - Configuración software rastreo ST4335
  - Configuración plataforma GPS ST4335
  - Integración dispositivo Suntech Plaspy
  - Configuración seguimiento flotas ST4335
  - Configuración telemetría Suntech ST4335
---

# Suntech - Configuración del ST4335

Esta página reúne la información pública necesaria para configurar el rastreador Suntech ST4335 y que reporte a Plaspy. Contiene los ajustes de servidor prácticos, el flujo de trabajo general y los comandos SMS que el fabricante publica para apuntar el ST4335 hacia Plaspy. Si planea integrar unidades ST4335 en Plaspy, esta guía está orientada a preparar el dispositivo para enviar posición y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Cuando el ST4335 admite configuración por SMS, los comandos del fabricante que se incluyen más abajo son ejemplos públicos y deben aplicarse teniendo en cuenta la versión de firmware del equipo y los detalles del APN del operador local.

## Resumen de la configuración

El proceso de configuración prepara al ST4335 para entregar ubicación y estado del equipo a Plaspy de forma confiable. Mediante los comandos SMS del fabricante o la herramienta de configuración equivalente, deberá indicar al rastreador cuál endpoint de Plaspy utilizar, con qué frecuencia reportar y qué credenciales APN usar para que la conexión de datos móviles esté disponible.

- Asignar al ST4335 el endpoint de reporte de Plaspy para que los datos se enrutien a la plataforma
- Configurar el APN y parámetros GPRS para que el dispositivo establezca la sesión de datos
- Ajustar intervalos y modos de reporte según el equilibrio deseado entre frecuencia y autonomía
- Verificar que el dispositivo reporte a Plaspy y aparezca en su cuenta o lista de dispositivos
- Usar el comando de verificación provisto para confirmar los ajustes después de la configuración

## Ajustes de servidor para Plaspy

Al configurar el ST4335 para su uso con Plaspy, asegúrese de apuntar el rastreador al endpoint compartido de Plaspy y al puerto indicado. Plaspy acepta conexiones de dispositivos por UDP o TCP en el mismo puerto para todos los dispositivos, y detecta automáticamente el protocolo del rastreador.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

## Requisitos habituales antes de la configuración

- Un ST4335 con alimentación, IMEI válido y una SIM con capacidad de datos móviles
- Acceso al método oficial de configuración Suntech para este modelo, como comandos SMS o la herramienta del proveedor
- Información correcta del APN del operador móvil, incluyendo nombre de APN y, si aplica, usuario y contraseña
- Forma de leer el IMEI del equipo para derivar el ID de dispositivo usado en los comandos Suntech
- Una cuenta de instalador o acceso de gestión para verificar que el dispositivo aparece en Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El ST4335 envía su posición y telemetría a Plaspy abriendo un enlace de datos TCP o UDP al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy recibe datos GNSS y E/S del dispositivo para mapas, alertas y registros históricos. Plaspy utiliza un único puerto de escucha para todos los rastreadores soportados y detecta el protocolo de forma automática, por lo que solo necesita indicar el endpoint y puerto correctos en el equipo.

- El dispositivo se configura para reportar al endpoint y puerto del servidor compartido de Plaspy
- Los datos se transmiten vía TCP o UDP según la configuración del rastreador o las condiciones de red
- Plaspy recibe posición, eventos y estados de E/S para mapas en vivo y notificaciones
- Los intervalos de reporte controlan la frecuencia con la que Plaspy recibe actualizaciones
- Comandos de verificación o consultas de estado pueden confirmar que el rastreador apunta a Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Suntech para el ST4335, como la configuración por SMS o la herramienta del proveedor recomendada para su versión de firmware y revisión de hardware.
2. Ingrese el endpoint de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 en la configuración de red del dispositivo.
3. Configure el puerto de destino en 8888 que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el equipo si el rastreador requiere elección explícita del transporte.
5. Configure el APN del operador y cualquier usuario o contraseña de APN que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación o comprobando que el equipo aparece y envía actualizaciones en Plaspy.

## Ejemplos de comandos de configuración

El ST4335 admite comandos de configuración vía SMS. A continuación se muestran ejemplos públicos de comandos SMS extraídos del material de configuración del modelo. Debe reemplazar [device_id] y los marcadores de APN por los valores apropiados para su equipo y su SIM.

Nota sobre cómo obtener el ID de dispositivo
- El ID de dispositivo usado en los comandos SMS de Suntech son los últimos 6 dígitos del IMEI excluyendo el dígito de control final. Por ejemplo, si el IMEI es 123456789012345, el ID de dispositivo sería los seis dígitos inmediatamente antes del último dígito según el ejemplo del fabricante. Confirme la subcadena correcta para su IMEI antes de enviar comandos.

1) Configurar el APN del operador y el servidor GPRS
- Use 1 en la bandera APN si proporciona usuario o contraseña de APN, de lo contrario use 0.
- Reemplace los marcadores [device_id], [apn], [apnu] y [apnp] antes de enviar.

```
SA200NTW;[device_id];02;[apn_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Explicación de los marcadores
- [device_id]  = últimos 6 dígitos del IMEI excluyendo el dígito final (ver nota arriba)
- [apn]        = nombre del APN del operador
- [apnu]       = usuario del APN si es requerido, de lo contrario dejar en blanco
- [apnp]       = contraseña del APN si es requerida, de lo contrario dejar en blanco
- [apn_flag]   = 1 si se proporciona usuario o contraseña APN, de lo contrario 0

2) Establecer el intervalo de reporte a 60 segundos
- Este comando define parámetros de reporte e intervalos usados por el dispositivo.

```
SA200RPT;[device_id];02;60;60;60;3;0;0;0;0;0
```

3) Verificar ajustes o solicitar una configuración predefinida
- Use este comando de verificación para comprobar la configuración del dispositivo después de los cambios.

```
SA200CMD;[device_id];02;PresetA
```

Envíe estos comandos como mensajes SMS al número asociado con el ST4335. Siga las instrucciones de Suntech sobre el formato SMS si su firmware requiere un delimitador distinto o una extensión. Si el dispositivo o el firmware ofrecen una herramienta de configuración, prefiera esa herramienta para despliegues masivos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis exacta del SMS o el orden de los campos. Confirme siempre el formato de los comandos con las notas de la versión del firmware.
- El ST4335 soporta configuración por SMS según los ejemplos anteriores, pero los instaladores pueden emplear software del proveedor o servicios de aprovisionamiento para implementaciones a gran escala.
- Cuando se requiera usuario o contraseña de APN incluya la bandera APN con valor 1; de lo contrario use 0 como indica el formato de comando.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega en diferentes condiciones de red; Plaspy acepta cualquiera de los dos transportes y detectará automáticamente el protocolo del rastreador una vez que lleguen los paquetes al puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, por lo que solo necesita estandarizar el puerto de destino en el lado del rastreador.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST4335 con Plaspy brinda a las organizaciones una vía práctica para obtener visibilidad en tiempo real, monitoreo de eventos y seguimiento histórico de vehículos y activos pesados. El hardware robusto del ST4335 y sus modos de reporte configurables, combinados con el endpoint único y la detección automática de protocolo de Plaspy, simplifican la incorporación de dispositivos y reducen la necesidad de middleware personalizado.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes and official command reference verify information with the manufacturer at http://www.suntechint.com/ since setup steps and firmware behavior can change over time.
