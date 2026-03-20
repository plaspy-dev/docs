---
slug: /meitrack/t399l/configuration
id: t399l-configuration
sidebar_label: Configuration
title: Meitrack - T399L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Meitrack T399L con Plaspy, incluye comandos SMS y parámetros de servidor
keywords:
  - Configuración Meitrack T399L
  - Instalación Meitrack T399L
  - Meitrack T399L Plaspy
  - Configuración rastreador GPS Plaspy
  - Instalación rastreador GPS Meitrack
  - Configuración servidor T399L
  - Configuración SMS T399L
  - Seguimiento de flotas Meitrack T399L
  - Configuración dispositivo Meitrack
  - Configuración plataforma rastreador GPS
---

# Meitrack - T399L Configuración

Esta página describe el contexto público de configuración para usar el Meitrack T399L con Plaspy. Explica los valores de servidor compartidos necesarios para la conectividad, detalla un flujo práctico de instalación y proporciona los comandos SMS del fabricante que están disponibles públicamente para configurar el equipo y que reporte a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye comandos SMS de ejemplo y notas basadas en la configuración pública del modelo para ayudarle a conectar el T399L con Plaspy.

## Resumen de la configuración

El objetivo al configurar un Meitrack T399L para Plaspy es preparar el equipo para que establezca un enlace de datos fiable con el servidor de Plaspy, comprobar que puede enviar posiciones y eventos, y asegurarse de que los sensores e entradas requeridos estén habilitados para su monitoreo en Plaspy. El flujo de configuración público suele usar comandos SMS para ajustar detalles del servidor GPRS y los intervalos de reporte.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que entregue ubicación y eventos
- Configurar el APN y parámetros GPRS correctos para que el equipo tenga conectividad de datos
- Definir el intervalo de reporte y la notificación de eventos para que la plataforma reciba actualizaciones oportunas
- Validar el transporte y la conectividad para que el dispositivo aparezca en Plaspy
- Conservar la contraseña del equipo y confirmar valores de fábrica cuando sea necesario

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP on port 8888  
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol without per device protocol mapping

## Requisitos típicos antes de comenzar

- Un Meitrack T399L con alimentación y accesible, con la contraseña de fábrica disponible. Los comandos de ejemplo públicos usan la contraseña por defecto 0000.  
- Una SIM activa con un plan de datos móviles funcional y capacidad para enviar y recibir SMS para los comandos de configuración.  
- La información APN correcta del proveedor de la SIM para habilitar datos GPRS. Es posible que deba usar marcadores como {{apn}} al ingresar comandos.  
- Acceso al método oficial de configuración de Meitrack para la versión de firmware de su equipo, ya sea por SMS o por software del fabricante.  
- Una cuenta en Plaspy o acceso de administrador para confirmar que el dispositivo aparece en la plataforma tras la configuración.  
- Herramientas básicas para reiniciar o cortar la alimentación del equipo después de aplicar la configuración si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el T399L envía posiciones y eventos al endpoint y puerto compartidos del servidor Plaspy para que la plataforma pueda mostrar y procesar los datos del dispositivo. La configuración pública normalmente establece un registro de servidor GPRS apuntando a Plaspy y usa el intervalo de reporte del equipo para controlar la frecuencia de actualizaciones.

- El rastreador se configura para enviar paquetes TCP o UDP a d.plaspy.com en el puerto 8888  
- Plaspy acepta conexiones en 54.85.159.138 y el sistema usa el puerto 8888 para todos los dispositivos soportados por la plataforma  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de casos no es necesario mapear el protocolo por dispositivo  
- Los mensajes de ubicación, eventos y sensores enviados desde el equipo se vuelven visibles en la plataforma Plaspy una vez confirmada la conectividad  
- Los datos de sensores Bluetooth y los eventos de comportamiento de conducción disponibles en el T399L pueden formar parte de la telemetría enviada a Plaspy cuando esté configurado

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Meitrack adecuado para su equipo y firmware, como comandos SMS o la herramienta del proveedor.  
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS del equipo.  
3. Configure el puerto en 8888 para la entrada GPRS/servidor.  
4. Elija UDP o TCP si el dispositivo solicita selección de transporte. Plaspy soporta ambos en el mismo puerto.  
5. Proporcione el APN y, si aplica, usuario y contraseña del APN usando los marcadores requeridos por su SIM como {{apn}}, {{apnu}} y {{apnp}}.  
6. Aplique o guarde la configuración y reinicie o haga un ciclo de alimentación del rastreador si el dispositivo lo requiere para aplicar los cambios.  
7. Valide que el equipo reporta a Plaspy comprobando la conectividad en su cuenta de Plaspy o confirmando la recepción de posiciones y eventos en la plataforma.

## Ejemplos de comandos de configuración

Los siguientes comandos SMS se derivan de la configuración pública disponible para el Meitrack T399L. Estos comandos deben enviarse como mensajes SMS al dispositivo. En los ejemplos se usa la contraseña por defecto 0000.

1. Ajuste opcional inicial para restablecer a valores de fábrica. Suele usarse sólo al configurar por primera vez o si es necesario un reinicio
```
0000,F11
```

2. Establecer el servidor GPRS a Plaspy usando dominio o IP. Reemplace {{apn}} con el APN de su operador. Si su SIM requiere usuario o contraseña del APN, incluya {{apnu}} y {{apnp}} en ese orden
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Nota: Puede sustituir d.plaspy.com por la dirección IP si el equipo acepta un nombre de dominio:
```
0000,A21,2,d.plaspy.com,8888,{{apn}},{{apnu}},{{apnp}}
```

3. Ajustar la zona horaria a UTC 0
```
0000,B36,0
```

4. Establecer el intervalo de actualización a cada 1 minuto
```
0000,A12,6,0
```

5. Configurar el modo de reporte de eventos según la muestra pública
```
0000,C03,0
```

Explicación de los marcadores:
- {{apn}} es el APN del operador móvil necesario para la conectividad GPRS  
- {{apnu}} es el usuario del APN si lo requiere el operador  
- {{apnp}} es la contraseña del APN si lo requiere el operador

Envíe estos comandos SMS en el orden indicado cuando el orden sea importante y confirme los mensajes de éxito del equipo cuando sea posible. Use el comando de restablecimiento de fábrica únicamente cuando sea necesario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles. Verifique siempre el formato exacto de los comandos para su versión de firmware.  
- La muestra del T399L anterior utiliza comandos SMS y ajustes GPRS; pueden existir herramientas alternativas del fabricante para aprovisionamiento masivo.  
- Plaspy acepta tanto UDP como TCP en el puerto 8888. Elija el transporte requerido por su dispositivo y luego verifique la conectividad, ya que los entornos de red pueden favorecer un transporte sobre otro.  
- Mantenga la contraseña del dispositivo segura. Los ejemplos públicos usan la contraseña por defecto 0000, la cual debería cambiarse después del aprovisionamiento si las prácticas de seguridad así lo requieren.  
- Las variaciones de firmware por mercado o región pueden afectar el manejo de sensores Bluetooth, la configuración de E/S y los códigos de eventos. Consulte la documentación del fabricante para el comportamiento específico del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar un Meitrack T399L para que reporte a Plaspy proporciona a las organizaciones un endpoint de servidor consistente y un flujo de datos predecible, lo que facilita centralizar la visibilidad de flotas y activos. Usar los ajustes de servidor compartidos de Plaspy simplifica el aprovisionamiento de equipos porque la plataforma utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, reduciendo la necesidad de mapear protocolos por dispositivo al incorporar grandes flotas.

Si desea conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos más recientes por dispositivo, notas de firmware y guías de instalación verifique la documentación del fabricante en https://www.meitrack.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
