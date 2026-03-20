---
slug: /coban/gps108/configuration
id: gps108-configuration
sidebar_label: Configuration
title: Coban - GPS108 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban GPS108 con ajustes de servidor Plaspy y comandos SMS prácticos para la puesta en marcha
keywords:
  - configuración Coban GPS108
  - instalación Coban GPS108
  - Coban GPS108 Plaspy
  - configuración servidor GPS108
  - guía configuración rastreador GPS
  - instalación seguimiento vehicular Coban
  - configuración rastreador GPRS
  - ajustes servidor Plaspy
  - configuración rastreador Coban
  - configuración SMS GPS108
---

# Coban - GPS108 Configuración

Esta página ofrece contexto público para usar el Coban GPS108 con Plaspy. Se centra en los ajustes prácticos de servidor y en los comandos que normalmente se envían desde el lado del fabricante para apuntar el dispositivo al servicio de Plaspy, de modo que el rastreador pueda reportar ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Coban GPS108 se puede configurar mediante comandos SMS y ajustes de GPRS; más abajo encontrará ejemplos de SMS que ilustran un flujo de configuración habitual.

## Resumen de la configuración

Preparar un Coban GPS108 para su uso con Plaspy implica asegurar que el dispositivo pueda comunicarse por la red móvil y que esté apuntando al endpoint del servidor de Plaspy para que la plataforma reciba actualizaciones periódicas de ubicación y estado.

- Configure el rastreador para usar el APN del operador y, si se requiere, un nombre de usuario y contraseña para que los datos GPRS puedan conectarse.
- Apunte el dispositivo al endpoint del servidor de Plaspy para que los datos y la telemetría lleguen a la plataforma.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo exige una elección explícita.
- Establezca los intervalos de reporte y el comportamiento de envío para que las actualizaciones de ubicación cumplan sus necesidades de monitoreo.
- Valide la conectividad con un comando de verificación y confirme que el dispositivo aparezca en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el Coban GPS108:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son los detalles del endpoint compartido que permiten al Coban GPS108 enviar datos GPRS a Plaspy.

## Requisitos típicos antes de la configuración

- Un Coban GPS108 funcional con batería cargada o una fuente de alimentación permanente.
- Una tarjeta SIM con datos GPRS activos y capacidad de SMS instalada en el rastreador.
- El APN del operador de la red móvil y, si procede, el usuario y la contraseña del APN para la autenticación de datos.
- Acceso al método de configuración que admite la unidad, como comandos SMS o la herramienta del proveedor.
- Conocer la contraseña por defecto del dispositivo si los comandos SMS requieren autenticación (los comandos de ejemplo más abajo usan la contraseña por defecto).
- Un método para recibir respuestas del dispositivo por SMS mientras se prueba la conectividad.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPS108 envía datos de ubicación y estado a través de la red de datos móviles al endpoint y puerto del servidor Plaspy para que el dispositivo sea visible dentro de la plataforma Plaspy y pueda reportar eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP directa 54.85.159.138 en el puerto 8888.
- El transporte de datos se puede establecer en UDP o TCP según el firmware del rastreador y su preferencia.
- Plaspy recibe actualizaciones periódicas de ubicación y mensajes de eventos para que usted pueda monitorear movimientos, alarmas y estado.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.
- Tras una configuración y conectividad exitosas, el dispositivo debería aparecer y reportar en Plaspy sin necesidad de ajustes de servidor por unidad.

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial soportado por su unidad, como comandos SMS o el software del fabricante.
2. Configure el APN del operador usando el comando APN del dispositivo y proporcione las credenciales del APN si son necesarias.
3. Ingrese el servidor de Plaspy ya sea como el dominio d.plaspy.com o como la dirección IP 54.85.159.138 en la configuración de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP para el transporte si el rastreador requiere seleccionar un modo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador o el procedimiento lo requieren.
7. Valide que el dispositivo está reportando a Plaspy usando el comando de verificación del dispositivo y confirmando que aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El GPS108 suele aceptar comandos SMS para la puesta a punto. Los ejemplos siguientes se basan en patrones públicos de configuración del Coban GPS108. Los comandos de ejemplo usan la contraseña por defecto del dispositivo 123456 cuando se requiere contraseña.

Notas:
- Los comandos abajo se envían al dispositivo como mensajes SMS.
- Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por su APN del operador, nombre de usuario del APN y contraseña del APN respectivamente.
- El comando de restauración de fábrica es opcional y generalmente se usa solo al inicio o para limpiar configuraciones previas.

1. Restauración de fábrica (paso inicial opcional)
```
begin123456
```

2. Ajustar la zona horaria a UTC 0
```
time zone123456 0
```

3. Configurar el APN del operador
```
apn123456 [apn]
```

4. Establecer el usuario y la contraseña del APN
```
up123456 [apnu] [apnp]
```

5. Configurar el servidor GPRS de Plaspy usando la IP directa y el puerto
```
adminip123456 54.85.159.138 8888
```
O puede usar el dominio de Plaspy en lugar de la IP si el dispositivo acepta nombres de dominio:
```
adminip123456 d.plaspy.com 8888
```

6. Establecer intervalo de actualización para fixes periódicos (formato de ejemplo del dispositivo)
```
fix060s060s***n123456
```

7. Cambiar a modo GPRS y seleccionar transporte
```
gprs123456,1,1
```
Formato alternativo más simple para cambiar de modo si está soportado:
```
gprs123456
```

8. Verificar la configuración actual del dispositivo
```
check123456
```

9. Habilitar protocolo avanzado para reporte de combustible o estado de sensores digitales
```
protocol123456 18
```

Reemplace los marcadores [apn], [apnu] y [apnp] con los valores del APN de su operador. Por ejemplo, apn123456 internet configuraría el APN como internet. La contraseña por defecto para control por SMS usada arriba es 123456; si la contraseña de su dispositivo ha sido cambiada, utilice la contraseña actual.

## Notas de configuración

- La configuración por SMS es común en el GPS108 pero los comandos y formatos exactos pueden diferir según la versión de firmware y la revisión de hardware.
- Elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Verifique el APN y las credenciales del APN con su operador móvil antes de enviar comandos GPRS.
- La contraseña por defecto del dispositivo en los ejemplos es 123456; cámbiela después de la configuración si su política de seguridad lo exige.
- Si experimenta problemas de conectividad, revise las respuestas del dispositivo a los comandos de verificación por SMS y confirme que el dispositivo puede resolver o alcanzar d.plaspy.com o la IP indicada.

## Por qué usar Plaspy con esta configuración

Usar el Coban GPS108 con Plaspy ofrece un camino directo hacia el seguimiento centralizado y la visibilidad operativa. Apuntar el rastreador al endpoint y al puerto del servidor Plaspy permite que las actualizaciones de ubicación y los eventos del dispositivo fluyan hacia la plataforma, de modo que gestores de flotas y servicios de monitoreo puedan ver posiciones, alarmas y estados desde una única interfaz.

Si desea conocer más sobre Plaspy y cómo la plataforma gestiona los datos entrantes de los dispositivos visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y las referencias de comandos más actuales consulte la documentación oficial de Coban en https://www.coban.net/ porque las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
