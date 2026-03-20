---
slug: /autofon/dx_mayak_81/protocol
id: dx_mayak_81-protocol
sidebar_label: Protocol
title: AutoFon - DX Mayak 8.1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon DX Mayak 8.1 and how it communicates with Plaspy tracking servers
keywords:
  - AutoFon DX Mayak 8.1 protocol
  - AutoFon GPS protocol
  - DX Mayak 8.1 Plaspy compatibility
  - DX Mayak 8.1 tracking protocol
  - AutoFon tracker protocol
  - GPS tracker protocol Plaspy
  - vehicle tracking AutoFon
  - asset tracking DX Mayak
  - GLONASS GPS tracker protocol
  - GPRS tracking protocol
---

# AutoFon - DX Mayak 8.1 Protocol

This page describes the public protocol context for using the AutoFon DX Mayak 8.1 with the Plaspy fleet management platform. It focuses on how the device reports location, telemetry, and alarms to a monitoring server and what role the tracker communication protocol plays in day to day operation with Plaspy.

The DX Mayak 8.1 is a compact battery powered tracker that uses GLONASS and GPS for position fixes, supports low power interval tracking and event driven alerts such as movement crash and SOS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary depending on firmware version hardware revision and manufacturer implementation.

## Protocol Overview

The tracker communication protocol defines how the DX Mayak 8.1 packages and sends position updates telemetry and event notifications to a monitoring server so that Plaspy can ingest and present that information. This page provides safe public facing context about the protocol role without exposing device internals.

- Carries location data and GNSS metadata so Plaspy can place the device on maps and calculate movement.
- Transmits telemetry such as battery level temperature satellite count and GSM signal for device health monitoring.
- Delivers event notifications for movement tilt crash and SOS so alerts are available in Plaspy workflows.
- Supports queued retransmission of stored messages so offline periods do not permanently lose events.
- Uses the device cellular link for primary reporting with SMS as a secondary control or fallback channel.

## How Plaspy Detects the Protocol

Plaspy receives incoming reports on a shared endpoint and automatically determines the tracker protocol when a properly configured device sends data. In most deployments the user does not need to manually select a protocol inside Plaspy if the DX Mayak 8.1 is set to report to the Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138.
- The port is 8888 which is the common port Plaspy uses for device reporting.
- The device may be configured using UDP or TCP on port 8888 depending on the tracker configuration.
- All devices in Plaspy use the same port which simplifies device setup across a fleet.
- Plaspy automatically detects the tracker protocol once the device begins sending reports to the Plaspy endpoint.

## Transport and Connection Context

Connection context covers how the DX Mayak 8.1 reaches Plaspy over cellular and how the platform accepts those reports. The device typically uses GPRS for reporting and can fall back to SMS for certain control commands or redundancy depending on the manufacturer configuration.

- Primary reporting is over GPRS to the Plaspy endpoint using either UDP or TCP on port 8888.
- Devices may be pointed to the domain d.plaspy.com or directly to 54.85.159.138 when network routing requires an IP address.
- SMS is available as a secondary channel for control and emergency messages but is not the primary real time telemetry channel to Plaspy.
- Long sleep and low duty cycles are supported by the tracker so connection windows are short and energy efficient.
- Stored message retransmission is used to deliver queued packets to Plaspy after connectivity is restored.

## Protocol Compatibility Notes

- Firmware revisions can change message content timing and optional telemetry fields; always note the device firmware level when validating behavior.
- Hardware revisions and regional modem variants may affect which transport modes or GNSS features are present.
- Carrier network conditions and SIM profile provisioning influence GPRS reporting reliability and should be validated in the deployment region.
- Some features such as BLE based owner presence and close range locating are reported by the device but depend on paired smartphone behavior as part of the solution.
- Transport choice TCP versus UDP can be configurable on the device; confirm the device is set to use port 8888 and the expected transport for your setup.
- Manufacturer documentation is the authoritative source for firmware specific packet behavior and command options.

## Why Protocol Understanding Matters

Understanding how the DX Mayak 8.1 communicates helps ensure a smooth setup with Plaspy and improves troubleshooting when data is missing or events do not appear as expected. Awareness of protocol behavior is also useful for planning battery life and offline handling for long term deployments.

- Confirms that the device is pointed to the correct Plaspy endpoint and using the required port and transport.
- Helps interpret telemetry values and event timing when reviewing device health in Plaspy.
- Makes it easier to diagnose communication gaps caused by coverage battery or configuration issues.
- Supports decisions about reporting intervals to balance battery life and update frequency in Plaspy.
- Facilitates coordinated testing between installers and Plaspy support when validating a new fleet rollout.

## Why Use Plaspy with This Protocol

Using the AutoFon DX Mayak 8.1 with Plaspy provides organizations with discreet long life tracking combined with a server platform that automatically accepts and recognizes incoming device reports. The tracker offers predictable telemetry and event driven alerts that map to common monitoring workflows such as theft detection geofence alerts and operational reporting.

Plaspy receives the DX Mayak 8.1 reports and presents location telemetry event notifications and device health indicators in maps dashboards and notification workflows so teams can act on real time information. To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the most current device protocol details firmware notes and manufacturer specific guidance please verify information on the AutoFon website https://www.autofon.ru/ since protocol support and firmware behavior can change over time.
