---
slug: /concox/vl106/configuration
id: vl106-configuration
sidebar_label: Configuration
title: Concox - VL106 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox VL106 con Plaspy, con pasos prácticos para servidor y ajustes por SMS
keywords:
  - Configuración Concox VL106
  - Instalación Concox VL106
  - Configuración servidor Concox VL106
  - VL106 Plaspy
  - Configuración rastreador GPS VL106
  - Instalación rastreador Concox
  - Ajustes servidor GPS Plaspy
  - Comandos SMS Concox VL106
  - Configuración rastreador vehicular
  - Rastreador de flota VL106
---

# Concox - VL106 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Concox VL106 con la plataforma Plaspy. Se enfoca en los pasos prácticos y ajustes de servidor públicamente disponibles que necesitará para dirigir el VL106 a reportar a Plaspy y validar la conectividad básica. El contenido resume los comandos SMS publicados por el fabricante junto con los ajustes de servidor esenciales que requiere la integración con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el dispositivo pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use las indicaciones a continuación para preparar el VL106 para Plaspy y confirme siempre los detalles específicos del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen de configuración

El objetivo de esta configuración es preparar un VL106 para que se comunique de forma confiable con Plaspy, de modo que el dispositivo aparezca en la plataforma para seguimiento en tiempo real y reporte de eventos. El proceso configura el acceso de red, apunta el dispositivo al endpoint de Plaspy y establece el comportamiento de reporte.

- Configure el APN y los parámetros GPRS del dispositivo para que el VL106 tenga acceso de datos móviles.
- Apunte el rastreador al servidor de Plaspy usando el dominio o la IP proporcionados y el puerto común de Plaspy.
- Elija el transporte (UDP o TCP) si es necesario y habilite el envío de datos con un intervalo apropiado.
- Habilite la operación GPRS y verifique que el rastreador alcance el endpoint de Plaspy.
- Valide que el dispositivo reporte a Plaspy y confirme que eventos como encendido (ignición) o SOS sean visibles.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el VL106. Plaspy requiere el mismo puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol so devices can report using their supported protocol to the shared port

## Requisitos previos comunes

- Una tarjeta SIM válida y activa con datos habilitados y capacidad SMS insertada en el VL106.
- Acceso al dispositivo para configuración por SMS o a la herramienta de configuración del fabricante según la documentación del proveedor.
- Datos APN correctos del operador móvil para conectividad de datos.
- Fuente de alimentación o conexión al vehículo para que el dispositivo tenga energía estable durante la configuración y las pruebas.
- Conocimiento del IMEI del dispositivo y de cualquier contraseña de instalador que el proveedor requiera para realizar la configuración.
- Una cuenta en Plaspy o contacto con el administrador de Plaspy para confirmar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VL106 envía posiciones GNSS, telemetría de movimiento y eventos al endpoint y puerto del servidor Plaspy. Plaspy ingiere esos datos para mapeo en tiempo real, flujos de trabajo de eventos y reproducción histórica, de modo que los operadores puedan monitorear vehículos y responder a alertas.

- El rastreador reporta al endpoint compartido de Plaspy usando d.plaspy.com o la IP alternativa 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy detecta el protocolo automáticamente.
- Se transmiten a Plaspy la ubicación, datos del IMU y telemetría de eventos como ACC/ignición y SOS para actualizaciones en vivo.
- El dispositivo puede usar intervalos de reporte configurados para controlar la frecuencia de actualizaciones, de modo que los datos aparezcan en Plaspy casi en tiempo real.
- El almacenamiento local a bordo conserva datos de eventos durante pérdidas temporales de conectividad y el VL106 sube los registros retenidos cuando se restablece la conexión.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox para el VL106, normalmente el conjunto de comandos SMS del proveedor o una herramienta de configuración Concox según la documentación del fabricante.
2. Asegúrese de que el dispositivo tenga una SIM funcional con el APN correcto y que SMS/datos estén disponibles.
3. Ingrese la dirección del servidor Plaspy estableciendo como parámetro SERVER ya sea d.plaspy.com o 54.85.159.138.
4. Configure el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Configure el intervalo de reporte (por ejemplo 60 segundos) y habilite los modos de reporte GPRS que el dispositivo requiera.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del proveedor lo solicita.
7. Valide que el VL106 esté reportando a Plaspy comprobando el estado del dispositivo y las posiciones entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VL106 puede configurarse mediante comandos SMS. Los siguientes comandos son los públicos usados para preparar el dispositivo para Plaspy. Conserve los marcadores de posición al sustituir por los valores de su operador.

- Reset opcional a configuración de fábrica (usar solo si necesita devolver el dispositivo a valores de fábrica):
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Establecer el APN del operador (reemplazar [apn] por el APN de su operador; incluya [apnu] y [apnp] si su operador requiere usuario y contraseña):
```text
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/ if }}#
```
(Al usar la sintaxis de marcador de posición anterior, reemplace [apn] con el APN del operador. Si su operador requiere nombre de usuario o contraseña para el APN, utilice los marcadores [apnu] y [apnp].)

- Establecer el servidor GPRS al dominio de Plaspy usando el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, establecer el servidor GPRS a la IP de Plaspy usando el puerto 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización para reportar cada 60 segundos (se muestran dos formatos comunes; use el formato que soporte su firmware):
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar el modo GPRS:
```text
GPRSON,1#
```

- Verificar los parámetros actuales GPRS:
```text
GPRSSET#
```

Use estos comandos en el orden mostrado cuando siga un flujo de configuración estándar. Reemplace los marcadores de posición y ajuste los valores para que coincidan con los requisitos de su operador de red y las necesidades de la instalación.

## Notas de configuración

- La configuración por SMS se proporciona arriba porque el VL106 admite comandos SMS; también pueden estar disponibles herramientas del fabricante que proporcionen una alternativa con interfaz gráfica.
- Diferentes versiones de firmware o revisiones de hardware pueden aceptar una sintaxis de comando ligeramente distinta; confirme el conjunto exacto de comandos con la documentación de Concox para el firmware de su dispositivo.
- Elija UDP o TCP según las necesidades de su instalación; Plaspy aceptará cualquiera en el puerto 8888 y detectará automáticamente el protocolo.
- Mantenga los marcadores de posición [apn], [apnu] y [apnp] intactos cuando prepare los comandos y reemplace con las credenciales de su operador según se requiera.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que la configuración de servidor y puerto es consistente entre tipos de dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el VL106 con Plaspy brinda a los operadores visibilidad consistente de la ubicación del vehículo, eventos de movimiento y estado del dispositivo usando un único endpoint de servidor compartido. La navegación asistida por INS y el IMU a bordo del VL106 complementan el mapeo en tiempo real y los flujos de eventos de Plaspy para apoyar operaciones de flota, monitoreo de seguridad y análisis forense tras incidentes.

Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y guía de instalación, verifique siempre la información actual en el sitio del fabricante https://www.iconcox.com/ ya que las especificaciones y métodos de configuración del proveedor pueden cambiar con el tiempo.
