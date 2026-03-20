---
slug: /protrack/et300/configuration
id: et300-configuration
sidebar_label: Configuration
title: Protrack - ET300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Protrack ET300 en Plaspy con ajustes de servidor, comandos SMS y verificación
keywords:
  - Configuración Protrack ET300
  - Instalación Protrack ET300
  - Protrack ET300 Plaspy
  - Ajustes servidor Protrack ET300
  - Configuración SMS Protrack ET300
  - Configuración rastreador GPS ET300
  - Guía instalación ET300
  - Configuración rastreador GPS Protrack
  - Instalación rastreador de vehículo ET300
  - Seguimiento de flotas ET300 Plaspy
---

# Protrack - ET300 Configuración

Esta página ofrece orientación pública para configurar el Protrack ET300 con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica los pasos habituales de preparación e incluye los comandos SMS más comunes publicados para que el ET300 apunte al servicio de Plaspy y así permita el rastreo en tiempo real y el envío de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ET300 es compatible con Plaspy desde fábrica y admite configuración por SMS y reporte por GPRS tal como se muestran en los ejemplos a continuación.

## Visión general de la configuración

Configurar el ET300 para Plaspy implica preparar el dispositivo para que envíe datos de posición y eventos al punto de conexión compartido del servidor de Plaspy, de modo que el equipo sea visible y reportable en la plataforma. Este proceso normalmente emplea la interfaz de comandos SMS del ET300 para establecer el APN y los datos del servidor, activar GPRS y ajustar los intervalos de reporte.

- Configurar el APN del dispositivo para que el rastreador pueda usar datos móviles en los reportes GPRS.
- Apuntar el rastreador al dominio o IP del servidor de Plaspy para que la telemetría llegue correctamente.
- Configurar el intervalo de reporte y habilitar el modo GPRS para actualizaciones en vivo.
- Validar la configuración usando los comandos de estado y de verificación de parámetros del dispositivo.
- Confirmar que el equipo aparece y reporta correctamente en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el lado del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el ET300 debe usar el puerto 8888

## Requisitos típicos antes de la configuración

- Un dispositivo ET300 con alimentación instalado según la guía del fabricante y accesible para su configuración.
- Una SIM con servicio de datos activado y el APN correcto para el operador móvil local.
- Capacidad de enviar comandos SMS al rastreador desde un número autorizado si se usa la configuración por SMS.
- Acceso al método de configuración oficial de Protrack o a la documentación del ET300 para confirmar pasos específicos del dispositivo.
- Conocimientos básicos del identificador del dispositivo (IMEI) y cómo verificar el estado del equipo después de configurar.
- Una cuenta en Plaspy y el aprovisionamiento del vehículo/dispositivo en la plataforma para asociarlo cuando comience a reportar.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ET300 envía posiciones, eventos y viajes registrados al punto de conexión y puerto compartidos de Plaspy. Plaspy ingiere la telemetría del dispositivo y la pone a disposición para seguimiento en tiempo real, alertas e informes históricos dentro de la plataforma.

- El rastreador envía datos GPRS a d.plaspy.com (o a la IP indicada) en el puerto 8888 para que Plaspy reciba mensajes de posición y eventos.
- Plaspy detecta automáticamente el protocolo del rastreador en la conexión, por lo que no es necesaria una selección manual de protocolo en la plataforma.
- Eventos como entradas/salidas de geocercas, exceso de velocidad, acciones de inmovilizador/corte de combustible y notificaciones de corte de energía se reenvían a Plaspy para generar alertas.
- Las actualizaciones regulares de posición se usan para visibilidad en tiempo real y reconstrucción de viajes históricos en Plaspy.
- Los comandos de verificación en el rastreador pueden confirmar parámetros y estado de conexión antes de la validación en la plataforma.

## Flujo de trabajo típico de configuración

1. Consulte el método de configuración oficial del Protrack ET300 o el software correspondiente y revise el conjunto de comandos SMS publicados y los requisitos de APN.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor a 8888 y, si el dispositivo lo requiere, seleccione UDP o TCP como opción de transporte.
4. Configure el APN del operador usando el comando APN del dispositivo, incluyendo usuario y contraseña del APN si son necesarios.
5. Aplique o guarde la configuración en el dispositivo y habilite los reportes GPRS o el modo GPRS.
6. Reinicie o desconecte y vuelva a conectar la alimentación del equipo si el fabricante recomienda un reinicio para aplicar los ajustes.
7. Verifique que el dispositivo reporta a Plaspy comprobando el estado con comandos del rastreador y confirmando que el equipo aparece en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El ET300 admite configuración por SMS. Los siguientes comandos públicos se encuentran en la documentación del ET300 y deben enviarse como mensajes SMS al dispositivo en el orden indicado cuando el orden influye en el resultado.

- Configure el APN del operador. Reemplace los marcadores con los valores del APN del operador. Mantenga las llaves si usa plantillas automatizadas.

```
APN,{{apn}}
```

- Si su APN requiere nombre de usuario y contraseña, utilice la forma extendida. Los marcadores deben reemplazarse con sus credenciales cuando sea necesario.

```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure el servidor GPRS para apuntar a Plaspy usando el dominio y el puerto 8888. Este comando configura la entrada de servidor 1 para usar d.plaspy.com y el puerto 8888.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Establezca el intervalo de actualización de ubicación (el ejemplo utiliza 60 segundos tanto para movimiento como para reposo). Ajuste los valores según la política de su flota.

```
TIMER,60,60#
```

- Habilite el modo GPRS para que el rastreador envíe datos por la red móvil.

```
GPRSON,1#
```

- Verifique los parámetros del dispositivo para revisar la configuración actual del rastreador.

```
PARAM#
```

- Consulte el estado del rastreador para un informe rápido de salud y conectividad.

```
STATUS#
```

Notas sobre los marcadores de posición
- {{apn}} = la cadena APN de su operador.
- {{apnu}} = nombre de usuario del APN si el operador lo exige.
- {{apnp}} = contraseña del APN si el operador la exige.
Conserve los marcadores al crear scripts o plantillas y reemplácelos por los valores de su operador antes de enviar.

## Notas de configuración

- La configuración por SMS está soportada en el ET300 como muestran los ejemplos; algunas instalaciones también pueden soportar USB o herramientas de software según el firmware.
- Variantes de firmware o versiones regionales del dispositivo pueden cambiar la sintaxis de comandos o los parámetros disponibles; confirme siempre los comandos exactos para la revisión de su equipo.
- Si el dispositivo requiere seleccionar TCP o UDP, elija el transporte que prefiera su red y asegúrese de que el dispositivo esté configurado de forma coherente con el puerto 8888 de Plaspy.
- Algunos APN de operadores requieren usuario y contraseña mientras que otros no; use los marcadores de APN para proporcionar credenciales cuando sea necesario.
- Reiniciar o ciclar la alimentación del rastreador tras aplicar los ajustes de servidor y APN suele ayudar a que el dispositivo se registre en la red y comience a reportar.

## Por qué usar Plaspy con esta configuración

Integrar el Protrack ET300 con Plaspy ofrece una vía directa para obtener seguimiento en tiempo real fiable, reporte de eventos y análisis histórico de viajes para flotas pequeñas y vehículos individuales. El soporte del ET300 para control de inmovilizador, alertas de geocerca, avisos por exceso de velocidad y detección de corte de energía se mapea directamente a las funciones de Plaspy para supervisión, alertas y gestión operativa.

Learn more about Plaspy and how it can manage ET300 devices at https://www.plaspy.com. Manufacturer configuration details and firmware behavior can change over time, so please verify the latest device specific setup information on the Protrack website at http://www.protrackgps.in/.
