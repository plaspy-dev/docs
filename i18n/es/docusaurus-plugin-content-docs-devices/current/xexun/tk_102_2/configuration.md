---
slug: /xexun/tk_102_2/configuration
id: tk_102_2-configuration
sidebar_label: Configuration
title: Xexun - TK-102-2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Xexun TK-102-2 con Plaspy mediante servidor compartido y comandos SMS
keywords:
  - configuración Xexun TK-102-2
  - instalación Xexun TK-102-2
  - integración TK102-2 Plaspy
  - configuración servidor rastreador GPS
  - configuración de rastreo vehicular
  - comandos SMS de configuración
  - configuración GPRS APN
  - ajustes del servidor Plaspy
  - detección de protocolo del rastreador
  - configuración plataforma de rastreo GPS
---

# Xexun - Configuración del TK-102-2

Esta página describe el contexto público de configuración para usar el Xexun TK-102-2 con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo para apuntar el equipo al endpoint compartido de Plaspy, de modo que el rastreador envíe posiciones y alertas a la plataforma. Cuando estén disponibles, se incluyen comandos SMS comunes del fabricante como referencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos a continuación como ejemplos públicos y confirme el comportamiento del equipo con la documentación actual del fabricante.

## Resumen de configuración

El objetivo del proceso es dejar el TK-102-2 listo para comunicarse de forma confiable con Plaspy y aparecer en su cuenta de seguimiento. Para este modelo, la configuración pública suele usar comandos SMS para establecer parámetros APN y la entrada del servidor GPRS, y luego habilitar el envío periódico de posiciones al endpoint de Plaspy.

- Configure el APN de datos móviles y, si aplica, el usuario y la contraseña del APN en la SIM del equipo para habilitar GPRS.  
- Apunte el dispositivo al servidor de Plaspy usando la dirección de servidor o IP provista y el puerto compartido.  
- Seleccione el método de transporte si el equipo requiere elegir entre UDP o TCP.  
- Configure los intervalos de reporte para que el dispositivo envíe actualizaciones de posición a Plaspy.  
- Valide la conectividad y la visibilidad en Plaspy después de aplicar los ajustes.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte para UDP o TCP en conexiones de dispositivos  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma intentará identificar el protocolo del rastreador automáticamente cuando éste informe al servidor.

## Requisitos típicos antes de la configuración

- Un TK-102-2 con batería y encendido, con acceso a la configuración por SMS o a la herramienta oficial del fabricante.  
- Una tarjeta SIM con capacidad de datos y SMS y con los datos APN del operador móvil.  
- Nombre del APN y, si el operador lo exige, usuario y contraseña del APN.  
- Acceso al IMEI del rastreador para el registro y la verificación del dispositivo.  
- Un teléfono que pueda enviar SMS al rastreador o acceso al software de configuración oficial del fabricante.  
- Conocimiento básico de si la instalación prefiere UDP o TCP como transporte.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el TK-102-2 usa la conexión de datos móviles para establecer una sesión hacia el endpoint del servidor Plaspy y transmitir datos de posición y eventos. Los puntos de configuración indican al rastreador dónde enviar la información, qué puerto usar y con qué frecuencia reportar.

- El equipo se configura para enviar datos al endpoint compartido de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.  
- Los reportes se envían al puerto 8888, que es el puerto estándar que Plaspy utiliza para los dispositivos soportados.  
- El rastreador puede usar UDP o TCP según la configuración y el soporte de firmware.  
- Plaspy realiza detección automática de protocolo para interpretar los datos entrantes de los rastreadores compatibles.  
- Una vez conectado, los eventos habituales como movimiento, geocerca, exceso de velocidad o batería baja se muestran en la interfaz de Plaspy.

## Flujo de configuración habitual

1. Revise el manual oficial del Xexun TK-102-2 o la lista de comandos SMS para disponer de la sintaxis exacta del fabricante.  
2. Asegúrese de que la SIM del dispositivo tenga un plan de datos activo y obtenga el APN del operador, así como usuario y contraseña del APN si son necesarios.  
3. Ingrese d.plaspy.com o la IP 54.85.159.138 en la configuración del servidor del rastreador según acepte el dispositivo.  
4. Establezca el puerto en 8888 y elija UDP o TCP si el equipo exige seleccionar el transporte.  
5. Aplique o guarde la configuración en el rastreador mediante comandos SMS o la herramienta del fabricante.  
6. Reinicie o haga un ciclo de energía del rastreador si el equipo requiere reinicio para aplicar los nuevos ajustes GPRS.  
7. Verifique que el dispositivo informe a Plaspy y aparezca en su cuenta, confirmando el protocolo y el comportamiento del intervalo de reportes.

## Ejemplos de comandos de configuración

El TK-102-2 puede configurarse mediante comandos SMS. Los ejemplos del fabricante que se muestran abajo usan la contraseña por defecto del dispositivo 123456. Si ha personalizado la contraseña, reemplace la contraseña numérica en cada comando según corresponda. Los marcadores como [apn], [apnu] y [apnp] deben sustituirse por el APN, el usuario APN y la contraseña APN de su operador.

- Comando opcional de restablecimiento de fábrica al partir de configuraciones desconocidas
```text
begin123456
```

- Configurar el APN del operador
```text
apn123456 [apn]
```

- Configurar el usuario del APN si lo requiere el operador
```text
apnuser123456 [apnu]
```

- Configurar la contraseña del APN si lo requiere el operador
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Habilitar el modo GPRS para permitir reportes por datos móviles
```text
gprsmode123456
```

- Establecer el intervalo de actualización a 60 segundos
```text
t060s***n123456
```

Notas sobre marcadores y contraseña
- [apn] es la cadena APN de su operador móvil.  
- [apnu] es el usuario APN cuando el operador lo exige.  
- [apnp] es la contraseña APN cuando el operador lo exige.  
- 123456 se muestra aquí como la contraseña por defecto del dispositivo en este ejemplo público. Cámbiela si su equipo usa otra contraseña.

## Notas de configuración

- El firmware y la sintaxis de comandos pueden variar según la revisión de hardware y la versión de firmware. Confirme siempre la sintaxis exacta de comandos SMS con la documentación actual de Xexun.  
- El dispositivo admite configuración por SMS como se muestra, lo cual resulta útil en instalaciones sin interfaz o en ubicaciones remotas.  
- Elija UDP o TCP según la preferencia del instalador y la capacidad del firmware. Plaspy soporta ambos y realiza detección automática de protocolo.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que la entrada del puerto es uniforme entre tipos de dispositivos.  
- Si prefiere usar el dominio en lugar de la IP, ingrese d.plaspy.com cuando el rastreador acepte un nombre de dominio.

## Por qué usar Plaspy con esta configuración

Usar el Xexun TK-102-2 con Plaspy ofrece un camino claro hacia la visibilidad centralizada y el monitoreo de eventos para vehículos o activos. Al configurar el rastreador para que reporte a Plaspy, habilita seguimiento a nivel de plataforma, alertas y visibilidad histórica, aprovechando funciones del equipo como reportes periódicos y los distintos tipos de alertas que soporta el TK-102-2.

To learn more about Plaspy and how it handles device connections visit https://www.plaspy.com. For the latest device specific setup details firmware notes and official command lists check the manufacturer website at https://www.xexun.com/.
