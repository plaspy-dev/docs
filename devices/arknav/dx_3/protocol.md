---
slug: /arknav/dx_3/protocol
id: dx_3-protocol
sidebar_label: Protocol
title: ArkNav - DX-3 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for ArkNav DX-3 GPS tracker integration with Plaspy covering connectivity and Contact ID alarms
keywords:
  - ArkNav DX-3 protocol
  - ArkNav DX-3 GPS protocol
  - ArkNav DX-3 protocol for Plaspy
  - ArkNav DX-3 communication protocol
  - ArkNav DX-3 tracking protocol
  - ArkNav GPS tracker protocol
  - Plaspy compatible trackers
  - Contact ID alarm protocol
  - personal safety GPS tracker
  - vulnerable person tracking
---

# ArkNav - DX-3 Protocol

This page explains the public protocol context for using the ArkNav DX-3 personal GPS tracker with the Plaspy platform. It focuses on how the device exchanges alarms, location updates, and status messages with Plaspy in non sensitive, implementation independent terms so operators and integrators know what to expect when connecting DX-3 units to the platform.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior for the DX-3 can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes the common communication context and integration considerations rather than firmware level internals.

## Protocol Overview

The DX-3 communication protocol governs how the tracker reports alarms, location, and status to a server and how it accepts remote configuration or acknowledgements where supported. For personal safety use cases the protocol emphasizes event driven reporting, concise alarm messages, and privacy aware reporting controls.

- Enables event driven transmissions for panic, man down, and Start Tracking sessions so Plaspy receives actionable alerts only when required.
- Carries discrete location reports when tracking is enabled and sends status updates like battery and charger state for operational monitoring.
- Supports standardized alarm messaging; the DX-3 implements Contact ID style alarm reporting for integration into alarm receiving systems and centralized platforms.
- Provides metadata that helps Plaspy correlate devices with user accounts and routing rules without requiring continuous telemetry.
- Allows two way voice and incident signaling support to be coordinated by Plaspy when network voice capability is available.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically determines the device protocol based on the incoming data pattern and connection source. In most cases a properly configured DX-3 will begin reporting to Plaspy without manual protocol selection in the platform.

- Plaspy listens on a common endpoint so devices report to the same server location and port for all supported models.
- The Plaspy server endpoint is d.plaspy.com and the server IP is 54.85.159.138 for direct configuration where DNS is not used.
- The port used by Plaspy for device traffic is 8888 and Plaspy uses the same port for all devices.
- Plaspy automatically detects the tracker protocol so manual protocol selection in the platform is typically not required when the device is correctly configured to report to Plaspy.
- If a DX-3 is not appearing in Plaspy, confirm server settings on the device, transport selection, and firmware compatibility before changing platform settings.

## Transport and Connection Context

DX-3 units can be configured to use different transport types depending on deployment needs and network availability. Understanding the connection context helps ensure the device can reach Plaspy reliably and that alarm and location messages arrive promptly.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 where DNS is not suitable.
- All devices in Plaspy use the same port, simplifying configuration and firewall rules for deployments that mix tracker models.
- Choose UDP for simpler low latency reporting where supported, or TCP where a connection oriented transport is preferred by network policy or device firmware.
- Validate mobile network and firewall policies to ensure traffic to the Plaspy endpoint and port is permitted from the device network.

## Protocol Compatibility Notes

- Firmware revisions on the DX-3 can introduce minor protocol variations or additional message types; verify firmware release notes when troubleshooting.
- Hardware revisions or optional accessories may change supported transports or features such as voice or accessory reporting.
- The DX-3 supports Contact ID style alarm messaging which is useful for standardized alarm routing but implementation details can vary by firmware.
- Transport selection between UDP and TCP may affect delivery characteristics and should be chosen based on network behavior and device configuration.
- Always validate device reporting by checking that the tracker is configured to point to d.plaspy.com or 54.85.159.138 on port 8888 and that reporting conditions like Start Tracking or panic are exercised.
- For integration with third party alarm receiving systems, confirm how Contact ID payloads are mapped and routed by both the device and Plaspy.

## Why Protocol Understanding Matters

A practical understanding of the DX-3 communication protocol helps administrators deploy, troubleshoot, and maintain reliable monitoring for vulnerable users without exposing firmware internals. Knowing the high level behavior reduces integration time and supports predictable incident response.

- Ensures correct server and port configuration so alarms and location updates reach Plaspy quickly.
- Helps choose the appropriate transport and network settings for the deployment environment.
- Aids in diagnosing why an alarm or location report was not received by checking device state, firmware, and reporting triggers.
- Supports operational policies that balance privacy and visibility by understanding when the device will report location.
- Reduces integration friction when combining DX-3 units with other trackers and alarm sources in a single Plaspy deployment.

## Why Use Plaspy with This Protocol

Using the ArkNav DX-3 with Plaspy provides a straightforward way to manage personal safety devices alongside other assets in a single monitoring environment. Plaspy ingests alarm events, location updates during active tracking sessions, and device status so caregivers and operators can prioritize responses and maintain operational oversight without unnecessary continuous monitoring.

Plaspy is designed to simplify configuration by using a shared endpoint and port and by automatically detecting tracker protocols when devices report to the platform. To learn more about Plaspy and its capabilities visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer guidance verify information on the ArkNav product site https://www.arknavgps.com.tw/.
