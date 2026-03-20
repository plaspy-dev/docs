---
slug: /istartek/vt120_l/configuration
id: vt120_l-configuration
sidebar_label: Configuration
title: iStartek - VT120-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek VT120-L con comandos SMS y ajustes del servidor Plaspy para seguimiento de flotas confiable
keywords:
  - configuración iStartek VT120-L
  - instalación iStartek VT120-L
  - configuración servidor VT120-L
  - configuración dispositivo Plaspy
  - comandos SMS VT120-L
  - configuración rastreador GPS VT120-L
  - ajustes servidor Plaspy
  - configuración rastreador vehicular
  - configuración APN VT120-L
  - integración seguimiento de flotas
---

# iStartek - Configuración VT120-L

Esta página describe el contexto público de configuración para usar el rastreador iStartek VT120-L con Plaspy. Explica los ajustes prácticos del servidor y los pasos habituales por parte del fabricante o instalador para apuntar el dispositivo a Plaspy y habilitar el reporte en tiempo real. La guía se basa en comandos de configuración públicos y en los valores compartidos del servidor Plaspy necesarios para la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT120-L ofrece configuración por SMS como método público; los ejemplos siguientes mantienen los comandos SMS del dispositivo y los marcadores de posición cuando corresponda.

## Resumen de la configuración

El objetivo de este proceso es preparar al VT120-L para que se comunique de manera fiable con la plataforma Plaspy usando el endpoint y el puerto compartidos de Plaspy. Para el VT120-L esto generalmente implica aplicar los ajustes APN, seleccionar el servidor Plaspy (por dominio o IP), fijar un intervalo de reporte y verificar los parámetros.

- Configure el APN del dispositivo para que el VT120-L pueda usar datos móviles para subidas GPRS o recibir conexiones desde el servidor.
- Establezca el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor Plaspy y asigne el puerto 8888.
- Seleccione el tipo de transporte UDP o TCP en el dispositivo si se solicita y confirme que pueda alcanzar el servidor Plaspy.
- Aplique un intervalo de reporte adecuado, por ejemplo 60 segundos para actualizaciones regulares de posición.
- Verifique los ajustes y confirme que el dispositivo reporte a Plaspy y aparezca en su panel de seguimiento.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: admite UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta datos de VT120-L compatibles sin exigir la selección manual del protocolo en Plaspy

## Requisitos habituales antes de la instalación

- Un dispositivo VT120-L con alimentación, instalado o accesible para su configuración.
- Una tarjeta SIM válida con un plan de datos móviles activo y las credenciales APN correctas del operador.
- Acceso al método de configuración que utilice el instalador, por ejemplo comandos SMS o el software del fabricante.
- Los valores APN de su operador para completar el campo APN del dispositivo (los ejemplos conservan marcadores de posición).
- Capacidad para recibir respuestas SMS del rastreador para verificar la configuración cuando use SMS.
- Acceso a credenciales o detalles de aprovisionamiento en Plaspy para confirmar que el dispositivo es visible en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT120-L se configura para enviar mensajes de ubicación y estado al endpoint del servidor Plaspy en d.plaspy.com o a la IP equivalente. El rastreador utiliza el transporte seleccionado (UDP o TCP) en el puerto compartido de Plaspy, de modo que la plataforma pueda recibir los mensajes de seguimiento y mostrarlos en el sistema.

- El dispositivo envía actualizaciones periódicas de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP en el VT120-L; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Plaspy consume los mensajes del rastreador para ofrecer ubicación en vivo, alertas y reproducción histórica.
- El almacenamiento en búfer del dispositivo y las prácticas de envío dual a servidor ayudan a proteger la continuidad de la ruta si ocurren problemas temporales de red.
- Después de la configuración, valide que el dispositivo sea visible y que reporte correctamente en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración iStartek para su VT120-L, normalmente comandos SMS o la herramienta del proveedor.
2. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como endpoint del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 para coincidir con los requisitos de Plaspy.
4. Seleccione UDP o TCP en el dispositivo si la configuración solicita elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe cualquier comando de finalización requerido.
6. Reinicie el dispositivo si las instrucciones del fabricante o el firmware exigen un reinicio para aplicar los cambios.
7. Valide que el VT120-L reporte a Plaspy verificando el estado del equipo en la plataforma y confirmando la recepción de mensajes.

## Comandos de ejemplo para configuración

El VT120-L puede configurarse enviando comandos por SMS. Los comandos abajo se presentan en el orden típico usado en guías públicas. Conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} cuando inserte los valores de su operador.

- Reinicio opcional a configuración de fábrica (usar sólo si es necesario revertir a valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} con el APN de su operador. Si su operador requiere usuario y contraseña incluya {{apnu}} y {{apnp}} respectivamente; omítalos si no son necesarios.
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS por dominio apuntando a Plaspy (usa el índice de servidor 1 del dispositivo)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por dirección IP apuntando a Plaspy (usa el índice de servidor 0 del dispositivo)
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización de ubicación cada 60 segundos
```text
TIMER,60#
```

- Consultar parámetros actuales en el dispositivo
```text
PARAM#
```

Notas sobre los comandos anteriores
- Envíe cada comando como un SMS separado al VT120-L según las instrucciones del dispositivo.
- El comando SERVER puede usar el dominio d.plaspy.com o la IP del servidor Plaspy 54.85.159.138; ambos apuntan a Plaspy en el puerto 8888.
- El comando APN incluye los marcadores {{apn}}, {{apnu}} y {{apnp}}. Reemplace estos con el APN, usuario y contraseña de su operador cuando correspondan.
- El comando FACTORY# es opcional y sólo debe utilizarse cuando sea necesario reiniciar a valores de fábrica.

## Observaciones sobre la configuración

- Las diferencias de firmware pueden modificar la sintaxis exacta de los comandos o los parámetros soportados; siempre verifique la sintaxis para la versión de firmware de su VT120-L.
- El VT120-L soporta configuración por SMS en la guía pública, pero muchos instaladores prefieren usar la herramienta de configuración del fabricante cuando esté disponible.
- Elija TCP o UDP según la preferencia del instalador; Plaspy acepta ambos y detecta automáticamente el protocolo entrante en el puerto 8888.
- Todos los dispositivos que usan Plaspy emplean el mismo puerto 8888, por lo que no necesita valores de puerto específicos por dispositivo al configurar múltiples unidades.
- Si utiliza la opción de IP de servidor y más adelante cambia al dominio, ambos valores apuntan a endpoints de Plaspy, pero usar el dominio puede simplificar cambios futuros en la IP del servidor.

## Por qué usar Plaspy con esta configuración

Usar el VT120-L con Plaspy brinda a las organizaciones visibilidad operativa clara mediante actualizaciones de ubicación consistentes, alertas y reproducción histórica de rutas. La capacidad de búfer y la subida dual del VT120-L, junto con la detección automática de protocolos de Plaspy, reducen el riesgo de pérdida de datos y simplifican despliegues a gran escala donde muchos dispositivos comparten la misma configuración de servidor.

Aprenda más sobre Plaspy y cómo puede apoyar la gestión de flotas y el seguimiento en tiempo real en https://www.plaspy.com. Por favor verifique los pasos específicos del modelo, el comportamiento del firmware y cualquier instrucción adicional del fabricante en el sitio oficial de iStartek https://istartek.com/ ya que el comportamiento del dispositivo y la sintaxis de los comandos pueden cambiar con el tiempo.
