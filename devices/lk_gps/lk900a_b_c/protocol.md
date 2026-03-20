---
slug: /lk_gps/lk900a_b_c/protocol
id: lk900a_b_c-protocol
sidebar_label: Protocol
title: LK-GPS - LK900A/B/C Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the LK900A B C tracker with Plaspy and general compatibility guidance
keywords:
- LK GPS LK900A protocol
- LK GPS LK900B protocol
- LK GPS LK900C protocol
- LK900A B C GPS protocol
- LK GPS communication protocol
- LK GPS Plaspy compatibility
- LK GPS tracker protocol guide
- vehicle tracking protocol Plaspy
- LK GPS telemetry integration
- LK GPS asset tracking
---

# LK-GPS - LK900A/B/C Protocol

This page provides the public protocol context for using the LK-GPS LK900A/B/C tracker with Plaspy. It describes how the tracker exchanges location and telemetry with Plaspy in general terms, and highlights the connection settings and practical considerations needed for reliable delivery of position updates, events, and history to the Plaspy platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. The LK900A/B/C is a Plaspy compatible 4G magnet GPS GSM tracker with long life battery options and a suite of telemetry events, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For connectivity, Plaspy server domain is d.plaspy.com, the Plaspy server IP is 54.85.159.138, and the port is 8888. Devices may be configured to use UDP or TCP on port 8888 and all devices in Plaspy use the same port.

## Protocol Overview

The device reporting protocol is the mechanism that carries GPS positions, device identification, and telemetry from the tracker to Plaspy. Public documentation for the LK900 series typically focuses on what data is reported and how to point the device to a cloud endpoint rather than internal parser details. On Plaspy the protocol enables the platform to interpret location updates, event triggers, and periodic history for visualization and alerts.

- Transmits GPS coordinates and basic telemetry so Plaspy can plot live position and historical routes.
- Conveys event alerts such as geofence, movement, low battery, and tamper notifications to Plaspy event logs.
- Includes device identification information so Plaspy can associate incoming reports with the correct tracker record.
- Supports periodic or interval reporting modes used to balance update frequency and battery life for long deployments.
- Enables Plaspy to reconcile live updates and periodic uploads into continuous tracks and event timelines.

## How Plaspy Detects the Protocol

Plaspy receives reports at a shared network endpoint and automatically detects the tracker protocol for most supported devices. When a properly configured LK900A/B/C points to the Plaspy endpoint, the platform associates the feed with the correct device and begins processing positions and events without manual protocol selection in most cases.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for device reporting.
- The port is 8888 and Plaspy automatically detects the tracker protocol for devices reporting to that port.
- Devices may be configured to use UDP or TCP on port 8888 depending on the tracker configuration and network environment.
- All devices in Plaspy use the same port which simplifies device setup across models and vendors.
- If a tracker is correctly pointed at the Plaspy endpoint, users typically do not need to select a protocol inside Plaspy manually.

## Transport and Connection Context

Transport and addressing are foundational to delivering tracker data to Plaspy. The LK900 series uses cellular connectivity to relay messages to the cloud; the basic options for configuring the target are a DNS name or an IP address and a transport protocol. Understanding these connection options helps ensure the device can reach Plaspy reliably from the field.

- Devices may point to d.plaspy.com or to 54.85.159.138 when configuring the reporting host.
- The device may be configured using UDP or TCP on port 8888 depending on device support and chosen settings.
- Plaspy uses the same port for all supported devices which helps standardize configuration for fleets.
- Network factors such as carrier firewall rules, APN configuration, and signal availability affect successful delivery of reports.
- For testing, confirm that the device can resolve or reach the chosen endpoint over the selected transport from the intended deployment region.

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional telemetry fields, and event availability; always check firmware notes for your device version.
- Hardware revisions across LK900A, LK900B, and LK900C may affect battery behavior, sensor availability, or supported bands and should be validated against manufacturer specifications.
- Manufacturer side settings and regional variants can create protocol variations that affect how and when the tracker reports specific events.
- Select UDP or TCP transport based on device capabilities and network reliability; some networks or carriers prefer one transport over the other.
- Validate APN and mobile data plan configuration to ensure the tracker can establish a connection to Plaspy from the carrier network.
- When in doubt, test a device in your operational area and compare live data and event behavior to the expectations defined by manufacturer documentation.

## Why Protocol Understanding Matters

Understanding the communication protocol used by the LK900A/B/C helps ensure a smooth setup, accurate event mapping, and long term reliability when reporting to Plaspy. Clear expectations about what the tracker will send and how Plaspy receives it reduce troubleshooting time and help teams design efficient tracking profiles.

- Improves setup accuracy so devices point to d.plaspy.com or the Plaspy IP and use port 8888 with the correct transport.
- Helps troubleshoot missing updates by checking transport, SIM connectivity, and firmware behavior rather than platform settings.
- Enables informed choices about reporting intervals and power saving modes to meet both battery life and visibility requirements.
- Clarifies how event types from the tracker will appear in Plaspy so alerts and notifications can be configured correctly.
- Supports planning for firmware updates and hardware changes that might alter reporting behavior or available telemetry.

## Why Use Plaspy with This Protocol

Using the LK900A/B/C with Plaspy gives organizations a straightforward path to real time location, history playback, and event-driven alerts without complex platform configuration. The magnetic form factor, extended battery options, and event suite make the tracker practical for fleets, rental vehicles, logistics, and asset monitoring while Plaspy centralizes the data for dispatch, reporting, and operational workflows.

To learn more about Plaspy and how it integrates device protocols like the LK900A/B/C, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always verify information with the manufacturer at https://www.lk-gps.com. Protocol support and firmware behavior can change over time so confirming the latest manufacturer documentation helps ensure successful deployment.
