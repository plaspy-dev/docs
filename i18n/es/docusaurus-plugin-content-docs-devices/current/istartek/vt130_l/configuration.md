---
slug: /istartek/vt130_l/configuration
id: vt130_l-configuration
sidebar_label: Configuration
title: iStartek - VT130-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iStartek VT130-L con ajustes de servidor compatibles con Plaspy y ejemplos de SMS
keywords:
  - configuración iStartek VT130-L
  - configuración VT130-L para Plaspy
  - configuración de seguimiento iStartek
  - configuración de servidor VT130-L
  - ajustes de rastreador GPS Plaspy
  - comandos SMS VT130-L
  - configuración de seguimiento de vehículos
  - configuración de rastreador GNSS
  - dispositivos compatibles con Plaspy
  - configuración APN VT130-L
---

# iStartek - Configuración del VT130-L

Esta página documenta el contexto público de configuración para usar el rastreador iStartek VT130-L con Plaspy. Explica los valores de servidor compartidos que Plaspy requiere, describe un flujo de trabajo práctico para preparar el VT130-L e incluye los comandos SMS proporcionados por el fabricante que se usan comúnmente para apuntar el equipo a los servidores de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del VT130-L, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT130-L admite configuración por SMS y parámetros GPRS/APN; los ejemplos siguientes usan los comandos SMS públicos suministrados por iStartek.

## Resumen de la configuración

El objetivo principal al configurar el VT130-L para Plaspy es preparar el dispositivo para que envíe de forma fiable datos GNSS y telemetría a la plataforma, de modo que los vehículos aparezcan y se actualicen en tiempo real. La configuración se centra en orientar el servidor, las credenciales APN y de red, la cadencia de reporte y la verificación de que el rastreador se registra correctamente en Plaspy.

- Apuntar el VT130-L a los ajustes de servidor de Plaspy para que los datos lleguen a su cuenta.
- Configurar el APN y los parámetros GPRS para que el dispositivo pueda usar la red de datos móviles.
- Establecer el intervalo de reportes acorde a sus necesidades de monitoreo y consumo de datos.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy.
- Opcionalmente, reiniciar a valores de fábrica durante la provisión inicial para un estado conocido.

## Ajustes de servidor de Plaspy

- Dominio de servidor: d.plaspy.com para configuración basada en DNS
- IP de servidor: 54.85.159.138 como opción de IP directa
- Puerto: 8888, puerto que Plaspy utiliza para todos los dispositivos soportados
- Transporte: soporte para UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

Tenga en cuenta que Plaspy usa el puerto 8888 para todos los equipos y que la plataforma detectará el protocolo del rastreador cuando el dispositivo comience a enviar datos.

## Requisitos típicos antes de la configuración

- Un VT130-L con alimentación y acceso físico para enviar SMS o configurar localmente
- Una tarjeta SIM activa con datos móviles y capacidad de SMS, y un APN válido
- Método de acceso a la configuración del fabricante, como comandos SMS o herramienta del proveedor
- Conocimiento básico del IMEI del dispositivo y cómo recibir mensajes de confirmación
- Acceso a credenciales de cuenta Plaspy o instrucciones de registro del dispositivo para la validación final

## Cómo se conecta este rastreador a Plaspy

Cuando el VT130-L está configurado, envía paquetes de GNSS y estado del dispositivo al endpoint de Plaspy en d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888. Plaspy recibe los datos, detecta automáticamente el protocolo del dispositivo y mapea la telemetría entrante a las funciones de seguimiento en vivo y alertas.

- Los reportes del equipo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Elija UDP o TCP en el dispositivo si se requiere seleccionar transporte
- Plaspy detecta automáticamente el protocolo y procesa la telemetría entrante
- Alarmas y eventos de entradas digitales se integran en los flujos de alertas de Plaspy
- Actualizaciones regulares de posición e informes por temporizador permiten visibilidad en tiempo real en la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, por ejemplo los comandos SMS documentados por iStartek o la herramienta del proveedor.
2. Introduzca el nombre del servidor de Plaspy d.plaspy.com o la IP directa 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, recordando que Plaspy usa este mismo puerto para todos los equipos compatibles.
4. Seleccione UDP o TCP como transporte si el VT130-L requiere una selección explícita.
5. Configure el APN y cualquier usuario o contraseña APN necesarios para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando en la plataforma la llegada de telemetría o usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

El VT130-L admite configuración por SMS. A continuación se muestran los comandos SMS públicos proporcionados por el fabricante. Preserve los marcadores de posición al sustituir los valores de su red.

1. Reinicio opcional a valores de fábrica (usar solo si es necesario)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador
- APN básico solamente
```
APN,[apn]#
```
- APN con usuario y contraseña si es necesario
```
APN,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el APN del operador móvil. [apnu] y [apnp] son marcadores de posición opcionales para usuario y contraseña del APN.

4. Establecer el servidor GPRS usando nombre DNS (recomendado)
```
SERVER,1,d.plaspy.com,8888#
```

5. O establecer el servidor GPRS usando IP directa
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización de ubicación cada 60 segundos
```
TIMER,60#
```

7. Verificar los parámetros actuales
```
PARAM#
```

Envíe cada SMS al VT130-L desde un número autorizado según las reglas de provisión del dispositivo descritas en su documentación de instalador. Mantenga el orden de los comandos cuando realice una configuración inicial para asegurar que los ajustes de red y servidor se apliquen antes de que comiencen los reportes.

## Notas de configuración

- Las versiones de firmware y las revisiones regionales de hardware pueden cambiar los comandos soportados y los nombres de los parámetros; verifique los comandos con la versión de firmware del VT130-L que tenga.
- El VT130-L soporta configuración por SMS como en los ejemplos anteriores, pero también pueden estar disponibles herramientas del proveedor o utilidades USB.
- Elija TCP o UDP de acuerdo con sus necesidades de red y el soporte del firmware; Plaspy aceptará cualquiera de los dos transportes y detectará el protocolo automáticamente.
- Como Plaspy usa el puerto 8888 para todos los dispositivos, solo necesita configurar ese único puerto al apuntar a la plataforma.
- Al usar IP directa en vez de nombre de dominio, la configuración basada en DNS permite cambios futuros en las IPs del servidor sin actualizar los dispositivos.

## Por qué usar Plaspy con esta configuración

Configurar el VT130-L para reportar a Plaspy ofrece visibilidad unificada y en tiempo real de la ubicación y telemetría de vehículos en flotas mixtas. Con el VT130-L transmitiendo posición GNSS, alarmas de eventos y datos de estado al endpoint compartido de Plaspy, los operadores pueden usar mapeo en vivo, alertas y análisis para optimizar despacho, seguridad y protección de activos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific instructions and firmware behavior with the manufacturer at https://istartek.com/ since setup methods and firmware details can change over time.
