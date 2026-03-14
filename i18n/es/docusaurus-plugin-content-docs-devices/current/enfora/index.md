---
id: enfora
title: Enfora
sidebar_label: Enfora
sidebar_class_name: menu_item_brand
description: Aprenda cómo los dispositivos GPS Enfora pueden funcionar con Plaspy para rastreo confiable de flotas y activos
keywords:
  - Enfora
  - GPS Enfora
  - rastreador Enfora
  - rastreo GPS
  - rastreo de flotas
  - rastreo de activos
  - compatibilidad Plaspy
  - compatibilidad de rastreadores
  - rastreo de vehículos
  - telemetría
---

import BrandCatalog from '@site/src/components/Devices/BrandCatalog';
import { brand } from './index.js';

<img src={brand.image} alt="Enfora" className="brand-catalog-logo" />

# Enfora

Enfora cuenta con trayectoria en el ámbito de la telemetría inalámbrica y el rastreo GPS, ofreciendo equipos para el monitoreo remoto de activos y la gestión de flotas. En esta página encontrará cómo integrar dispositivos Enfora con Plaspy, qué capacidades suelen ofrecer los equipos Enfora y cómo elegir el modelo adecuado para su caso de uso. Para información oficial del fabricante puede visitar http://www.enfora.com/.

## Cómo funcionan los dispositivos Enfora con Plaspy

Plaspy se conecta a los dispositivos Enfora compatibles mediante flujos de telemetría estándar a través de redes celulares. Cuando un rastreador Enfora se configura para enviar su posición y telemetría a Plaspy, la plataforma recibe actualizaciones de ubicación, mensajes de estado y eventos de alerta para que usted pueda administrar activos, revisar historial y activar notificaciones.

Los pasos exactos de configuración dependen del modelo de dispositivo. Detalles de integración específicos por equipo y las configuraciones recomendadas de APN o servidor están disponibles en las páginas de cada dispositivo dentro de esta documentación. Utilice el catálogo a continuación para localizar la página del dispositivo que coincide con su hardware.

## Explore modelos Enfora compatibles

<BrandCatalog brand={brand} />

El catálogo anterior lista todos los modelos Enfora que se conocen como compatibles con Plaspy. Cada entrada enlaza a una página de documentación dedicada que describe parámetros de telemetría, formatos de mensaje habituales y las configuraciones recomendadas para Plaspy. Comience por el modelo que corresponda a su equipo para ver consejos de instalación y ejemplos de configuración.

## Funciones comunes en los dispositivos Enfora

Aunque las capacidades varían según el modelo, los rastreadores Enfora suelen ofrecer estas funciones que Plaspy aprovecha:
- Informes periódicos de posición GPS para seguimiento de ubicación e historial de rutas
- Conectividad celular para telemetría en tiempo real o casi en tiempo real
- Entradas y salidas básicas para monitoreo de encendido, puertas o sensores externos
- Telemetría de nivel de batería y estado de alimentación para monitoreo del estado del activo
- Detección de movimiento y reportes basados en actividad para alertas de manipulación o inactividad

Estas funciones comunes se traducen directamente a capacidades de Plaspy como seguimiento en vivo, geocercas, alertas y generación de reportes.

## Casos de uso típicos para rastreadores GPS Enfora

Los dispositivos Enfora se emplean con frecuencia en escenarios como:
- Supervisión de ubicación y rutas de flotas vehiculares
- Monitoreo remoto de activos en zonas con cobertura celular
- Seguimiento de equipos en obras de construcción o entornos industriales
- Recolección básica de telemetría para planificación de mantenimiento preventivo

Plaspy convierte los mensajes crudos del dispositivo en historial de ubicación aprovechable, flujos de trabajo de alertas y métricas de desempeño de la flota.

## Por qué elegir Plaspy para el monitoreo de dispositivos Enfora

Plaspy está diseñado para ingerir telemetría de una amplia variedad de dispositivos GPS y ofrecer las herramientas que necesitan los gestores de flota:
- Mapa centralizado en vivo y reproducción de historial para los dispositivos que reportan a Plaspy
- Alertas configurables y geocercas basadas en eventos del dispositivo
- Páginas de configuración y documentación por dispositivo que guían la parametrización necesaria
- Integraciones y opciones de exportación para reportes y sistemas downstream

Usar Plaspy con hardware Enfora le permite combinar la telemetría del equipo con paneles y automatizaciones de Plaspy sin tener que desarrollar canales de ingestión a medida.

## Ayuda para encontrar el dispositivo Enfora adecuado

No está seguro de qué modelo elegir? Siga este método:
1. Abra el catálogo de la marca arriba para identificar modelos similares a su hardware actual o evaluar opciones.
2. Visite la página de documentación del dispositivo para confirmar entradas soportadas, requerimientos de alimentación y formatos de mensaje.
3. Si necesita sensores específicos o comportamientos de E/S, verifique esas capacidades en la página del dispositivo en lugar de fiarse de descripciones genéricas.
4. Contacte al soporte de Plaspy si requiere ayuda para mapear un modelo a un flujo de trabajo o integración concreta.

Si necesita detalles comerciales o de garantía sobre un dispositivo, consulte al fabricante o a su proveedor de hardware.

## Preguntas frecuentes

Q: ¿Qué dispositivos Enfora son compatibles con Plaspy?
A: Los modelos Enfora compatibles están listados en el catálogo de esta página. Haga clic en un modelo para ver su documentación de dispositivo y los pasos de configuración recomendados para Plaspy.

Q: ¿Puedo usar rastreadores GPS Enfora con Plaspy?
A: Sí. Muchos rastreadores Enfora pueden enviar telemetría a Plaspy usando telemetría celular estándar. Revise la página del dispositivo para conocer los ajustes de servidor y formato de mensajes requeridos.

Q: ¿Plaspy soporta la monitorización de flotas con dispositivos Enfora?
A: Plaspy soporta funciones a nivel de flota como seguimiento en vivo, reproducción de historial, geocercas y alertas para dispositivos que reportan ubicación y estado a la plataforma. Verifique en la documentación del modelo si el dispositivo puede enviar los tipos de datos necesarios.

Q: ¿Dónde encuentro la documentación de dispositivos Enfora dentro de Plaspy?
A: Cada modelo Enfora en el Brand Catalog enlaza a su página de documentación en este sitio. Esas páginas incluyen guías de configuración y notas para conectar el dispositivo a Plaspy.

Q: ¿Cómo configuro un dispositivo Enfora para que envíe datos a Plaspy?
A: Los pasos de configuración dependen del modelo. Consulte la documentación del dispositivo enlazada desde el catálogo. Si necesita asistencia con parámetros como APN o intervalo de telemetría, la página del dispositivo y los recursos de soporte de Plaspy le orientarán.

Q: ¿A quién contacto si un dispositivo no reporta a Plaspy?
A: Primero confirme que el dispositivo esté alimentado y tenga cobertura celular. Luego revise la página del dispositivo para verificar los ajustes de servidor correctos. Si el problema persiste, contacte al soporte de Plaspy proporcionando el IMEI del equipo y muestras recientes de mensajes para facilitar la resolución.

## Próximos pasos

Explore los dispositivos Enfora listados en el catálogo de arriba para encontrar el modelo que satisfaga sus necesidades. Cada página de dispositivo contiene los detalles técnicos necesarios para conectarlo a Plaspy. Si está listo para gestionar dispositivos desde una sola plataforma, obtenga más información sobre Plaspy en https://www.plaspy.com.
