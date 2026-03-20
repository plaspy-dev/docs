---
slug: /eelink/gpt26/configuration
id: gpt26-configuration
sidebar_label: Configuration
title: EElink - GPT26 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT26 y reportar datos a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración EElink GPT26
  - instalación EElink GPT26
  - configuración servidor GPT26
  - configuración GPT26 Plaspy
  - configuración plataforma de rastreo EElink
  - ajustes de servidor Plaspy
  - comandos SMS rastreador GPS
  - configuración APN rastreador GPS
  - dispositivo reportando a Plaspy
  - configuración de seguimiento de flotas
---

# EElink - GPT26 Configuración

Esta página ofrece orientación pública sobre la configuración del rastreador GPS EElink GPT26 para que reporte a Plaspy. Reúne los ajustes de servidor prácticos, pasos de verificación y ejemplos de comandos SMS que se usan habitualmente para preparar un dispositivo GPT26 para enviar datos a la plataforma Plaspy. El contenido se basa en comandos públicos del fabricante y en los requisitos de servidor compartido de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos que aparecen abajo como ejemplos públicos y confirme los detalles específicos del equipo con el fabricante cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara al GPT26 para conectarse al servidor de Plaspy y enviar actualizaciones de ubicación y estado de forma fiable. Para el GPT26, el fabricante proporciona comandos por SMS que se usan comúnmente para ajustar la zona horaria, el APN, el endpoint del servidor y el intervalo de reporte.

- Configure el APN del dispositivo para que el rastreador pueda establecer una conexión de datos GPRS con Plaspy.
- Establezca la entrada del servidor GPRS al endpoint compartido de Plaspy (dominio o IP) y el puerto 8888.
- Elija el transporte (UDP o TCP) si el dispositivo requiere selección para las sesiones de datos.
- Defina un intervalo de reporte adecuado (por ejemplo, TIMER,60# para 60 segundos) y valide la conectividad al endpoint de Plaspy.
- Use comandos de verificación para confirmar los parámetros después de configurar y para resolver problemas de conectividad.

## Ajustes de servidor Plaspy

- Dominio del servidor: d.plaspy.com para el endpoint de datos de Plaspy  
- IP del servidor: 54.85.159.138 como endpoint alternativo  
- Puerto: 8888 como el puerto compartido que usa Plaspy para todos los dispositivos  
- Soporte de transporte: configure el dispositivo en UDP o TCP en el puerto 8888 según la opción del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor

## Requisitos típicos antes de configurar

- Una unidad GPT26 con batería cargada, encendida y accesible para recibir comandos de configuración  
- Una tarjeta SIM activa con APN de datos válido y capacidad de SMS cuando la configuración via SMS sea necesaria  
- Los datos correctos del APN del operador móvil (APN, usuario y contraseña si son requeridos)  
- Acceso a un teléfono o a un gateway SMS para enviar los comandos de configuración por SMS al dispositivo  
- Instrucciones del fabricante o software para opciones específicas del equipo y notas de firmware  
- Una forma de monitorear la conectividad del dispositivo en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GPT26 se configura para enviar datos de ubicación y estado a Plaspy a través de la conexión de datos móviles usando los ajustes de servidor GPRS que usted proporcione. Cuando se indica el endpoint y el puerto de Plaspy, el dispositivo abre un canal de datos y transmite telemetría para que la plataforma muestre ubicación y estado.

- El dispositivo usa el APN configurado para obtener conectividad GPRS a la red móvil.  
- El rastreador se apunta al endpoint del servidor Plaspy (d.plaspy.com) o a la IP equivalente (54.85.159.138).  
- Los datos se envían al puerto 8888 en Plaspy; todos los dispositivos en Plaspy usan este mismo puerto.  
- Plaspy detectará automáticamente el protocolo correcto del rastreador cuando la unidad se conecte.  
- La ubicación y el estado reportados aparecerán en Plaspy una vez que el dispositivo se autentique y transmita correctamente.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software correspondiente, o prepárese para enviar comandos SMS si la configuración se realiza por SMS.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar el tipo de conexión.  
5. Configure el APN para la SIM (APN, usuario y contraseña según sea necesario) para que se establezca la conexión de datos GPRS.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para aplicar los ajustes.  
7. Valide que el dispositivo reporte a Plaspy revisando el estado en la plataforma o usando el comando de verificación del equipo.

## Ejemplos de comandos de configuración

El fabricante del GPT26 proporciona comandos por SMS para configurar parámetros comunes. A continuación están los comandos públicos en orden. Envíelos por SMS al número del dispositivo. Mantenga los marcadores de posición cuando los sustituya por valores reales del operador.

- Reinicio opcional a fábrica (use solo si necesita restaurar valores predeterminados):
```
FACTORY#
```

- Ajustar la zona horaria a UTC+0:
```
GMT,E,0#
```

- Configurar el APN del operador (reemplazar [apn], e incluir [apnu] y [apnp] solo si su operador requiere usuario y contraseña):
```
APN,[apn],[apnu],[apnp]#
```
Explicación: [apn] es la cadena APN del operador móvil. [apnu] y [apnp] son los marcadores de usuario y contraseña del APN y son opcionales.

- Establecer el servidor GPRS en Plaspy usando el dominio (la elección UDP o TCP se configura en el dispositivo si es necesario):
```
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS en Plaspy usando la dirección IP:
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos:
```
TIMER,60#
```

- Verificar parámetros actuales:
```
PARAM#
```

Siga el orden de comandos cuando sea importante y confirme cada cambio con PARAM# o con la respuesta del dispositivo.

## Notas de configuración

- Los fabricantes a veces cambian la sintaxis de comandos entre versiones de firmware; confirme la sintaxis SMS exacta para su unidad antes de enviar los mensajes.  
- Aquí se muestra la configuración por SMS porque el GPT26 admite consulta y comando por SMS como método público de puesta en marcha; también pueden existir software del proveedor o métodos OTA.  
- Elija UDP o TCP según la opción del dispositivo; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.  
- Si usa la entrada de dominio (d.plaspy.com), el dispositivo debe poder resolver DNS; la alternativa por IP (54.85.159.138) puede usarse si no hay resolución DNS.  
- Mantenga los marcadores de posición del APN ([apn], [apnu], [apnp]) tal como aparecen hasta que los reemplace por los valores específicos del operador.

## Por qué usar Plaspy con esta configuración

Configurar el EElink GPT26 para que reporte a Plaspy ofrece a las organizaciones un camino sencillo para centralizar la visibilidad de activos y el monitoreo operativo. Usar los ajustes de servidor y el puerto compartidos de Plaspy simplifica la incorporación de dispositivos en flotas y permite que Plaspy detecte automáticamente el protocolo del rastreador cuando los equipos se conectan.

Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y la guía del fabricante para el EElink GPT26, verifique la información actual en el sitio del fabricante https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
