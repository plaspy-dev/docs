---
slug: /concox/vl103d/configuration
id: vl103d-configuration
sidebar_label: Configuration
title: Concox - VL103D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox VL103D con Plaspy incluyendo servidor y comandos SMS
keywords:
  - Configuración Concox VL103D
  - Configuración VL103D
  - Configuración VL103D Plaspy
  - Configuración rastreador GPS VL103D
  - Configuración rastreador GPS Concox
  - Configuración de rastreadores Plaspy
  - Configuración rastreador de vehículo VL103D
  - Configuración servidor VL103D
  - Configuración SMS VL103D
  - Integración Concox VL103D
---

# Concox - Configuración del VL103D

Esta página describe el contexto público de configuración para usar el rastreador Concox VL103D con Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que puede apuntar el VL103D, los prerrequisitos habituales antes de la configuración y los comandos SMS públicos para preparar el equipo. Use esta guía para dejar la unidad lista y visible en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta el protocolo del rastreador automáticamente, aunque los pasos específicos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del vendedor que utilice. El VL103D soporta comandos de configuración por SMS que facilitan establecer el APN, el endpoint del servidor, el puerto y los tiempos de reporte como se muestra más abajo.

## Resumen de la configuración

El objetivo de la configuración es preparar el VL103D para comunicarse de forma fiable con Plaspy y verificar que el dispositivo aparezca en la plataforma. Para los equipos VL103D esto normalmente implica establecer el APN, apuntar el rastreador al servidor de Plaspy usando el puerto compartido y validar los informes y la telemetría en la plataforma.

- Configurar el APN del operador y, de ser necesario, el usuario y la contraseña del APN para que el dispositivo abra sesión GPRS en la red celular.
- Configurar la entrada del servidor GPRS apuntando a Plaspy usando el dominio o la IP y el puerto compartido.
- Elegir UDP o TCP si el dispositivo solicita la selección de transporte y guardar la configuración para que los reportes lleguen a Plaspy.
- Establecer un intervalo de reporte adecuado para que las actualizaciones de posición cumplan con sus necesidades operativas y expectativas de batería.
- Activar el modo GPRS y confirmar la configuración con el comando de verificación del equipo para asegurarse de que el rastreador se registra y envía datos a Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que el VL103D puede configurarse usando UDP o TCP en el puerto 8888.

## Requisitos típicos antes de la configuración

- Una unidad VL103D encendida y accesible, instalada o conectada a una fuente de alimentación de banco de pruebas.
- Una tarjeta SIM activa con plan de datos y los ajustes APN correctos para el operador móvil local.
- Acceso al método oficial de configuración Concox, como comandos SMS o la herramienta del proveedor.
- Un teléfono móvil capaz de enviar SMS de texto plano al dispositivo para la configuración por SMS si fuera necesario.
- Información básica a mano como el APN, el usuario y contraseña del APN si procede, y la decisión de usar el dominio o la IP de Plaspy.
- Señal celular adecuada en el lugar donde realizará la configuración y las pruebas de conectividad.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VL103D abre una sesión de datos GPRS y envía posiciones GNSS y telemetría al servidor compartido de Plaspy usando el endpoint y puerto indicados. Plaspy recibe esos mensajes y los asigna al registro del dispositivo mediante la detección automática de protocolo.

- El rastreador envía fixes GNSS y telemetría al servidor de Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Los reportes pueden enviarse por UDP o TCP según el transporte seleccionado en la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los ajustes estándar de servidor y puerto suelen ser suficientes.
- Una vez activo el reporte, Plaspy ofrece mapas en tiempo real, alertas y rutas históricas basadas en los datos entrantes.
- Verificar que el rastreador aparece en Plaspy confirma la correcta configuración del APN, servidor, puerto y transporte.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración Concox o al software para el VL103D, por ejemplo comandos SMS o una herramienta del proveedor.
2. Establezca el APN del dispositivo usando los valores del operador de su SIM para que el rastreador pueda abrir una sesión de datos GPRS.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 y establezca el puerto 8888.
4. Si el dispositivo solicita elegir transporte, seleccione UDP o TCP según su preferencia o la recomendación del instalador.
5. Configure un intervalo de reporte apropiado para su caso de uso y active el modo GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan un reboot.
7. Valide que el dispositivo reporta a Plaspy y aparece en la plataforma usando el comando de verificación del equipo o la consola de Plaspy.

## Comandos de configuración de ejemplo

El VL103D acepta configuración por SMS. Los siguientes comandos públicos aparecen en la documentación del fabricante y pueden enviarse como SMS de texto plano al equipo. Mantenga el orden cuando se indique y tenga en cuenta que el comando de restablecimiento de fábrica es opcional y solo necesario si desea borrar ajustes previos.

1. Restablecimiento de fábrica opcional para borrar ajustes anteriores
```
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Establecer el APN del operador
- Reemplace {{apn}} por el APN de su operador
- Si es necesario incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: Si su APN no requiere usuario ni contraseña puede enviar solo `APN,{{apn}}#`.

4. Configurar el servidor GPRS usando el dominio de Plaspy y el puerto
```
SERVER,1,d.plaspy.com,8888,0#
```

5. Alternativamente configurar el servidor GPRS usando la IP de Plaspy y el puerto
```
SERVER,0,54.85.159.138,8888,0#
```

6. Establecer intervalo de actualización cada 60 segundos
```
TIMER,60#
```
O el formato alternativo de temporizador
```
TIMER,60,60#
```

7. Activar modo GPRS
```
GPRSON,1#
```

8. Comprobar parámetros GPRS configurados
```
GPRSSET#
```

Conserve los marcadores de posición exactamente como aparecen. {{apn}} es el nombre del punto de acceso del operador. {{apnu}} y {{apnp}} son el usuario y la contraseña opcionales que algunos operadores requieren.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis y el comportamiento de los comandos. Confirme siempre los comandos con el manual del dispositivo correspondiente a su unidad.
- La configuración por SMS está soportada por el VL103D tal como se muestra arriba, pero también pueden existir herramientas del proveedor u opciones OTA para despliegues a mayor escala.
- Elija el transporte UDP o TCP según las necesidades de su instalación y el comportamiento de la red. Plaspy acepta ambos y detectará el protocolo automáticamente.
- Use el dominio d.plaspy.com cuando sea posible para permitir resolución DNS y facilitar migraciones de servidor; la IP 54.85.159.138 se proporciona como alternativa.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, así que asegúrese de introducirlo exactamente y de que cualquier firewall intermedio lo permita.

## Por qué usar Plaspy con esta configuración

Usar el Concox VL103D con Plaspy ofrece a las organizaciones visibilidad continua de ubicación, alertas de eventos y telemetría básica de vehículos en una sola plataforma. La conectividad LTE con fallback GSM del VL103D, su rendimiento GNSS y sus entradas/salidas para vehículos lo hacen una opción práctica para recuperación, monitoreo de comportamiento de conductores y rastreo de flotas ligeras cuando se apunta al servidor de Plaspy.

Para aprender más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para detalles específicos de configuración, notas de firmware y la documentación oficial de Concox consulte el sitio del fabricante https://www.iconcox.com/. Los pasos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable verificar las instrucciones actuales en el sitio del proveedor antes de despliegues a gran escala.
