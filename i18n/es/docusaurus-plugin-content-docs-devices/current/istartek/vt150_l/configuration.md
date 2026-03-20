---
slug: /istartek/vt150_l/configuration
id: vt150_l-configuration
sidebar_label: Configuration
title: iStartek - VT150-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador iStartek VT150 L con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración iStartek VT150 L
  - configuración VT150 L
  - iStartek configuración Plaspy
  - configuración servidor VT150 L
  - guía configuración rastreador GPS
  - ajustes servidor Plaspy
  - comandos SMS VT150 L
  - configuración rastreador motocicleta
  - integración plataforma telemática
  - configuración seguimiento vehicular
---

# iStartek - Configuración VT150-L

Esta página documenta el contexto público de configuración para usar el rastreador iStartek VT150-L con la plataforma Plaspy. Resume los pasos prácticos y los comandos públicos que se emplean para preparar el dispositivo y apuntarlo a Plaspy, además de consolidar los ajustes de servidor compartidos que Plaspy requiere. El contenido usa fragmentos de configuración públicamente disponibles y la descripción del equipo como base para la guía; está dirigido a instaladores, técnicos y administradores de flotas que preparan el VT150-L para su integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, variante de hardware, tipo de instalación y las herramientas del proveedor. El VT150-L soporta comandos por SMS y configuración con servidores duales, por lo que esta página incluye los comandos SMS más comunes y el flujo de trabajo para apuntar el dispositivo a Plaspy y verificar la conectividad.

## Visión general de la configuración

El proceso de configuración prepara el VT150-L para comunicarse de forma fiable con Plaspy, habilitando rastreo en tiempo real, reporte de eventos y gestión remota. Los comandos públicos por SMS permiten establecer el APN, el endpoint del servidor, el intervalo de reporte, la zona horaria y verificar parámetros.

- Apuntar el dispositivo al endpoint del servidor de Plaspy usando los comandos públicos SERVER.
- Configurar el APN de la operadora para que el rastreador pueda establecer conexión de datos para GPRS o 4G.
- Configurar intervalos de reporte y zona horaria según los requisitos operativos.
- Verificar los ajustes y confirmar que el dispositivo reporta correctamente a Plaspy mediante el comando de verificación proporcionado.
- Opcionalmente, restaurar a valores de fábrica antes de un despliegue masivo para contar con una línea base coherente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un VT150-L con alimentación y acceso al número SMS del dispositivo o a la herramienta de configuración del fabricante
- Alimentación de batería cargada o alimentación del vehículo y, si aplica, acceso al dispositivo sin obstruir las antenas
- Una Nano SIM activa con plan de datos apropiado y los datos de APN del operador para conectividad GPRS o LTE
- Conocimiento de las herramientas del instalador o del proveedor para configuración, o la capacidad de enviar comandos SMS de configuración
- Acceso a la documentación del fabricante para entender comportamientos específicos del firmware y opciones del modelo

## Cómo se conecta este rastreador a Plaspy

El VT150-L envía posición, estado y eventos a Plaspy a través de redes celulares. El dispositivo se configura para usar el endpoint y el puerto compartido de Plaspy, de modo que la plataforma pueda ingerir telemetría, eventos y actualizaciones de ubicación para monitoreo en vivo e informes históricos.

- El rastreador establece un enlace GPRS o 4G usando el APN configurado y envía mensajes a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; elija el que soporte la instalación o el firmware
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los mensajes enviados al puerto 8888 son interpretados correctamente por la plataforma
- Los reportes periódicos y los desencadenados por eventos se entregan a Plaspy para mapeo, alertas y análisis de flota
- La configuración de servidor dual en el dispositivo puede proporcionar una ruta de respaldo mientras FOTA y comandos remotos se gestionan a través de Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante o al software correspondiente, o prepare el envío de SMS al número del dispositivo.
2. Ingrese el host del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
5. Configure el APN para la SIM instalada y ajuste la zona horaria e intervalos de reporte según sea necesario.
6. Aplique o guarde la configuración y reinicie el equipo si éste requiere reboot para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría en la plataforma y usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

Para configurar el VT150-L mediante SMS, envíe los siguientes mensajes en el orden indicado. Mantenga los marcadores [apn], [apnu] y [apnp] y reemplácelos con los valores del operador cuando sea necesario. El restablecimiento de fábrica es opcional y recomendado sólo cuando se prepara el dispositivo para una base conocida.

1. Restablecimiento de fábrica opcional para devolver el dispositivo a los ajustes predeterminados
```
FACTORY#
```

2. Configurar la zona horaria a UTC 0
```
GMT,E,0#
```

3. Establecer el APN del operador. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario o contraseña incluya [apnu] y [apnp] respectivamente.
```
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/ if }}#
```
(Si su herramienta o cliente SMS no soporta sintaxis de plantillas, envíe APN,apn# o APN,apn,username,password# según corresponda.)

4. Configurar el servidor GPRS para apuntar a Plaspy por dominio
```
SERVER,1,d.plaspy.com,8888#
```

5. O configurar el servidor GPRS para apuntar a Plaspy por dirección IP
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización de posición a 60 segundos
```
TIMER,60#
```

7. Verificar parámetros actuales en el dispositivo
```
PARAM#
```

Nota: Mantenga el orden de comandos indicado para asegurar que el APN y la configuración del servidor se apliquen antes de verificar la conectividad.

## Notas de configuración

- Las variaciones de firmware y revisiones de hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; confirme siempre con las notas de la versión del firmware.
- El VT150-L soporta configuración por SMS como se muestra arriba; algunas implementaciones pueden preferir la herramienta del proveedor o la interfaz USB cuando estén disponibles.
- Elija UDP para menor sobrecarga y TCP si necesita entrega ordenada y persistencia de sesión; Plaspy acepta ambos y detectará automáticamente el protocolo.
- Use el comando SERVER con el dominio d.plaspy.com o con la IP 54.85.159.138; ambos deben usar el puerto 8888 que Plaspy emplea para todos los dispositivos.
- Al desplegar a gran escala, considere preconfigurar el APN y los ajustes del servidor antes de la instalación y verifique la conectividad con el comando PARAM#.

## Por qué usar Plaspy con esta configuración

Usar el VT150-L con Plaspy brinda a las organizaciones seguimiento en tiempo real preciso, reporte de eventos y capacidades de control remoto para motocicletas y vehículos livianos. La multi-constelación GNSS del equipo, la combinación de GPS con posicionamiento por estaciones base GSM y su diseño resistente se complementan con la ingesta centralizada y la detección automática de protocolos de Plaspy para ofrecer visibilidad operativa y alertas rápidas sin necesidad de configuración de servidor por dispositivo.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer details verify information on the iStartek website https://istartek.com/.
