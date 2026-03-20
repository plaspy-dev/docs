---
slug: /eelink/gpt45/configuration
id: gpt45-configuration
sidebar_label: Configuration
title: EElink - GPT45 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT45 y su compatibilidad con Plaspy usando ajustes de servidor compartido
keywords:
  - configuración EElink GPT45
  - configuración GPT45 para Plaspy
  - configuración rastreador GPS EElink
  - configuración servidor GPT45
  - configuración dispositivo Plaspy
  - comandos SMS rastreador GPS
  - configuración GPRS GPT45
  - guía compatibilidad Plaspy
  - configuración seguimiento vehicular
  - detección protocolo rastreador
---

# EElink - Configuración GPT45

Esta página describe el contexto público de configuración para utilizar el rastreador EElink GPT45 con Plaspy. Explica los ajustes compartidos del servidor Plaspy que deberá aplicar en el dispositivo y muestra los comandos SMS documentados públicamente que los fabricantes suelen publicar para la puesta a punto del GPT45.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica y confirme los detalles específicos del equipo con la documentación de EElink cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es preparar un dispositivo GPT45 para que envíe ubicación y telemetría a Plaspy de forma fiable. Usar el mismo endpoint y puerto de Plaspy en todos los dispositivos facilita la incorporación de flotas y permite que la plataforma detecte automáticamente el protocolo del rastreador.

- Configure el dispositivo para que apunte al endpoint del servidor Plaspy y así los datos lleguen a su cuenta de Plaspy
- Proporcione el APN y la configuración GPRS correctos para que el rastreador tenga conectividad de datos celulares
- Establezca un intervalo de reporte para que Plaspy reciba actualizaciones puntuales para seguimiento en vivo y alertas
- Valide que el dispositivo sea visible y esté reportando en Plaspy tras la configuración
- Use el comando de verificación del dispositivo para comprobar los parámetros clave en el rastreador

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices connect to the shared server and port

## Requisitos previos a la configuración

- Una unidad GPT45 cargada y lista para configuración con alimentación encendida
- Una tarjeta SIM con plan de datos activo y capacidad de SMS instalada en el dispositivo
- Información correcta del APN del operador móvil para la conectividad GPRS
- Acceso a un emisor de SMS o a la herramienta o app oficial de configuración de EElink para enviar comandos de ajuste
- Acceso básico a su cuenta de Plaspy para confirmar que el dispositivo aparece en la plataforma tras la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GPT45 envía fijaciones GNSS y telemetría a través de datos celulares al endpoint compartido de Plaspy. Plaspy recibe los mensajes en el mismo puerto para todos los dispositivos y determina el protocolo automáticamente, por lo que no necesita provisionar puertos separados para distintos modelos.

- El dispositivo apunta al dominio o IP del servidor Plaspy y al puerto 8888
- El rastreador transmite periódicamente posición y telemetría de sensores a Plaspy
- Los mensajes impulsados por eventos, como notificaciones de vibración o colisión, se reenvían a la plataforma
- Plaspy mapea los mensajes entrantes para su visualización en el panel, alertas y reproducción histórica
- La detección automática de protocolo en Plaspy maneja las variantes del protocolo EELINK sin necesidad de seleccionar el protocolo manualmente

## Flujo de configuración común

1. Acceda al método oficial de configuración de EElink, como la lista de comandos SMS del fabricante, la app de configuración o la herramienta USB.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según prefiera dominio o IP.
3. Establezca el puerto del servidor en 8888 para todos los dispositivos.
4. Seleccione el transporte UDP o TCP en el dispositivo si el rastreador requiere elegir el tipo de transporte.
5. Proporcione el APN del operador y, si aplica, el nombre de usuario y la contraseña del APN.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su panel o en la lista de dispositivos de Plaspy.

## Ejemplos de comandos de configuración

El GPT45 soporta configuración vía SMS. Los comandos que siguen son los mensajes SMS documentados públicamente para la configuración inicial. Mantenga los marcadores de posición cuando envíe el comando APN.

- Comando opcional de reseteo a fábrica
```
FACTORY#
```

- Establecer zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
Note los marcadores de posición. Reemplace [apn] con el APN de su operador. Los campos [apnu] y [apnp] representan nombre de usuario y contraseña del APN opcionales respectivamente.
```
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy por dominio y puerto
```
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy por IP y puerto
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de posición a 60 segundos
```
TIMER,60#
```

- Verificar parámetros actuales en el dispositivo
```
PARAM#
```

Estos comandos se muestran en el orden comúnmente recomendado para la configuración por primera vez. Use FACTORY# solo si necesita restaurar el dispositivo a los valores de fábrica antes de aplicar nuevos ajustes.

## Notas de configuración

- La configuración por SMS está soportada y se muestra arriba. Use la sintaxis SMS provista por EElink exactamente y conserve los marcadores de posición al reemplazar valores.
- Diferentes versiones de firmware o revisiones de hardware pueden aceptar variantes de comandos ligeramente distintas o requerir pasos adicionales. Consulte la documentación de EElink si tiene dudas.
- Si su rastreador requiere elegir un tipo de transporte, seleccione UDP o TCP según las necesidades del sitio. Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme siempre los ajustes del APN con el operador móvil si no se establece la conectividad de datos.
- Después de la configuración, espere unos minutos para que el dispositivo se registre en la red y envíe sus primeros reportes a d.plaspy.com en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el GPT45 con Plaspy centraliza la telemetría del dispositivo en una sola plataforma para seguimiento en vivo, alertas y análisis. El servidor compartido de Plaspy y el puerto homogéneo simplifican los despliegues en grandes volúmenes, ya que la plataforma detecta automáticamente los protocolos de los rastreadores conectados y normaliza los datos entrantes para su visualización y reglas.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup instructions and command syntax from the official manufacturer site at https://www.eelink.com.cn/ before deploying devices.
