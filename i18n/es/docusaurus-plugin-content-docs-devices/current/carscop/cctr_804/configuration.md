---
slug: /carscop/cctr_804/configuration
id: cctr_804-configuration
sidebar_label: Configuration
title: Carscop - CCTR-804 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Carscop CCTR 804 y conectarlo a Plaspy con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Carscop CCTR 804
  - Configuración Carscop para Plaspy
  - Configuración del servidor CCTR 804
  - Configuración rastreador GPS CCTR 804
  - Configuración rastreador Plaspy
  - Configuración rastreo de vehículos
  - Comandos SMS rastreador GPS
  - Configuración servidor GPRS
  - Integración rastreo de flotas
  - Detección de protocolo de rastreador
---

# Carscop - CCTR-804 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Carscop CCTR-804 con Plaspy. Reúne los valores de servidor de Plaspy que debe apuntar el equipo, explica el flujo de trabajo típico de configuración y recopila los comandos SMS públicos que suelen emplearse para preparar este modelo y que envíe datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use esta guía como orientación práctica y confirme cualquier detalle específico del modelo con la documentación oficial de Carscop.

## Resumen de configuración

Este proceso prepara el CCTR-804 para enviar paquetes de ubicación y telemetría a Plaspy, de modo que el dispositivo sea visible y gestionable dentro de la plataforma. Los comandos públicos y los pasos que se muestran a continuación ilustran un ejemplo sencillo de configuración basada en SMS que muchos instaladores usan para habilitar el reporte por GPRS.

- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que los paquetes de ubicación lleguen a la plataforma.
- Configure el APN y, si aplica, las credenciales del APN para que el equipo pueda establecer conectividad de datos GPRS.
- Mantenga el rastreador en línea y ajuste la zona horaria y el comportamiento de reporte para que las marcas de tiempo sean correctas y las subidas sean consistentes.
- Valide la conectividad y el reporte para confirmar que el dispositivo aparece en Plaspy y empieza a enviar posiciones y eventos.
- Use los comandos SMS de ejemplo incluidos para realizar restauración de fábrica, configurar zona horaria, APN, endpoint del servidor y opciones de keepalive.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un CCTR-804 instalado y con alimentación, con acceso a la interfaz SMS del dispositivo o a la herramienta de configuración del instalador.  
- Una tarjeta SIM activa con datos habilitados y capacidad de SMS insertada en el rastreador, y los datos del APN proporcionados por el operador móvil.  
- Conocimiento de la contraseña de comandos SMS del equipo. La contraseña por defecto que aparece en los ejemplos públicos es 123456. Confirme si su unidad utiliza otra contraseña.  
- Herramientas básicas de instalador, como un teléfono capaz de enviar SMS al rastreador o la utilidad de configuración oficial de Carscop cuando esté disponible.  
- Un plan para validar el reporte en Plaspy después de la configuración para confirmar que el dispositivo está conectado y enviando datos.

## Cómo se conecta este rastreador a Plaspy

El CCTR-804 envía posición y telemetría a través de la red celular usando GPRS para transmitir paquetes a Plaspy. Una vez configurado con el APN correcto y el endpoint del servidor, el rastreador sube datos al endpoint compartido de Plaspy, donde la plataforma parsea y muestra la actividad del dispositivo.

- El equipo envía paquetes GPS y telemetría al endpoint GPRS configurado en 54.85.159.138 y puerto 8888.  
- Plaspy acepta transporte TCP o UDP y detecta automáticamente el protocolo que usa el dispositivo.  
- El rastreador puede configurarse para permanecer en línea, de modo que lleguen subidas periódicas e informes por eventos para seguimiento en tiempo real.  
- Plaspy procesa los paquetes entrantes para ubicación en tiempo real, alertas y reproducción histórica de rutas.  
- Es necesario configurar correctamente el APN y GPRS para que la unidad establezca la sesión de datos y entregue paquetes al endpoint de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Carscop para su unidad, normalmente mediante comandos SMS o la herramienta del fabricante.  
2. Configure los parámetros APN del dispositivo con los valores del operador móvil para que el rastreador pueda usar GPRS.  
3. Ingrese el servidor de Plaspy como dominio o dirección IP, usando d.plaspy.com o 54.85.159.138.  
4. Establezca el puerto del servidor a 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.  
5. Seleccione UDP o TCP en el dispositivo si requiere una elección explícita.  
6. Aplique o guarde los ajustes y reinicie el equipo si el firmware del rastreador lo solicita.  
7. Verifique que el rastreador reporte en Plaspy y que las marcas de tiempo y la telemetría aparezcan correctamente.

## Ejemplos de comandos de configuración

El CCTR-804 soporta configuración vía SMS. Los siguientes comandos públicos muestran una secuencia típica. La configuración de ejemplo utiliza la contraseña por defecto del dispositivo 123456 indicada en los comandos públicos. Reemplace marcadores como [apn], [apnu] y [apnp] por los valores de su operador.

- Reset opcional a valores de fábrica (use solo si necesita restaurar a valores predeterminados):
```text
RESET*123456
```

- Ajustar la zona horaria del dispositivo a UTC 0:
```text
TIMEZONE*123456*+00
```

- Configurar el APN del operador móvil (reemplace [apn] por el APN de su operador):
```text
APN*123456*[apn]
```

- Configurar nombre de usuario y contraseña del APN si el operador los requiere (reemplace [apnu] y [apnp] por las credenciales):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
IP*123456*54.85.159.138,8888
```

- Configurar el rastreador para mantenerse en línea y reportar periódicamente:
```text
KEEPONLINE*123456
```

Notas sobre los marcadores y alternativas:
- [apn] es la cadena APN del operador.  
- [apnu] y [apnp] son el usuario y la contraseña del APN cuando el operador los requiere.  
- El ejemplo usa la IP del servidor 54.85.159.138 y el puerto 8888 como se muestra en los comandos públicos. Algunas versiones de firmware aceptan un nombre de dominio en lugar de una IP; consulte la documentación de Carscop si prefiere usar d.plaspy.com.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar los comandos SMS disponibles o la sintaxis; consulte el manual del dispositivo para detalles específicos de firmware.  
- La configuración por SMS es un método público común para este modelo, pero las herramientas del fabricante o la provisión OTA pueden estar disponibles según el proveedor.  
- Elija UDP o TCP según la preferencia del instalador y el soporte del firmware del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Tenga presente que la contraseña por defecto mostrada en los ejemplos públicos es 123456; confirme la contraseña de su unidad antes de enviar comandos.  
- Después de configurar, valide siempre el reporte en Plaspy para confirmar la conectividad y las marcas de tiempo correctas.

## Por qué usar Plaspy con esta configuración

Usar el CCTR-804 con Plaspy otorga a los operadores de flota visibilidad práctica en tiempo real, reportes configurables y manejo centralizado de eventos. Cuando el dispositivo apunta al endpoint y puerto de Plaspy y el APN está correctamente configurado, Plaspy ingiere ubicación y telemetría para mapeo en vivo, reproducción histórica y flujos de alertas útiles para despachos, seguridad y operaciones.

To learn more about Plaspy and how it can be used with Carscop trackers visit https://www.plaspy.com. For the latest device specific configuration commands, firmware behavior, and manufacturer details verify current information on the Carscop site http://www.carscop.com/ before deploying.
