---
slug: /topfly/knightx_300/protocol
id: knightx_300-protocol
sidebar_label: Protocol
title: TopFly - KnightX 300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for integrating the TopFly KnightX 300 with Plaspy including connection and compatibility guidance
keywords:
  - TopFly KnightX 300 protocol
  - TopFly KnightX 300 GPS protocol
  - TopFly KnightX 300 protocol Plaspy
  - KnightX 300 tracking protocol
  - TopFly asset tracker protocol
  - Plaspy device compatibility
  - KnightX 300 communication protocol
  - TopFly GPS tracker compatibility
  - Plaspy tracker integration
  - cold chain tracking protocol
---

# TopFly - KnightX 300 Protocol

This page describes the public protocol context for using the TopFly KnightX 300 with Plaspy. It summarizes how the device typically communicates with Plaspy, the connection endpoints used by Plaspy, and practical compatibility considerations while remaining intentionally high level and public safe.

The KnightX 300 is a compact rechargeable asset tracker with LTE Cat M1 and NB IoT fallback, multi GNSS, BLE sensor support, and buffered logging. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation. Review manufacturer documentation for device and firmware specific behavior before deployment.

## Protocol Overview

At a high level the KnightX 300 communication protocol governs how the tracker identifies itself, reports location and telemetry, and conveys sensor and alarm events to a backend such as Plaspy. The protocol enables reliable delivery, offline buffering and later upload, and the integration of BLE sensor data alongside GNSS positions.

- Enables periodic and event driven location reports and telemetry delivery to Plaspy.
- Carries environmental telemetry such as internal temperature, optional external probe readings, and BLE sensor values.
- Supports offline buffering and upload of historical logs when network returns to preserve event continuity.
- Allows transmission of panic and alarm events for anti theft and emergency workflows.
- Integrates with Plaspy ingestion so location and sensor streams can be presented in dashboards and alerting rules.

## How Plaspy Detects the Protocol

Plaspy receives device connections on a shared endpoint and port and applies automatic protocol detection to match incoming tracker reports to a compatible parser. In most cases users do not need to select a protocol inside Plaspy as long as the KnightX 300 is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP for device reporting is 54.85.159.138.
- The port used by Plaspy for device connections is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol so manual selection is usually not required when the device is pointed to the Plaspy endpoint.
- Ensure the device is configured to report to d.plaspy.com or 54.85.159.138 on the correct transport and port to allow automatic detection.

## Transport and Connection Context

The KnightX 300 supports multiple transport options and can be configured to use the transport that best fits the deployment. Plaspy accepts the device connection on the shared port so the primary configuration task is ensuring the tracker reports to the Plaspy endpoint and uses a supported transport.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and network preferences.
- Devices can point to the Plaspy reporting endpoint by domain d.plaspy.com or directly to IP 54.85.159.138.
- All devices in Plaspy use the same port, simplifying device side configuration.
- The tracker also supports other transport options documented by the manufacturer such as MQTT or SMS where relevant, but TCP or UDP to the Plaspy endpoint are the typical transports for direct ingestion.
- Verify transport selection and carrier network compatibility for LTE Cat M1 NB IoT or GSM fallbacks for your region.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and supported transports; confirm firmware behavior for your units.
- Different hardware revisions or regional SKUs may enable or disable specific radio bands, transports, or sensors.
- Manufacturer configuration defaults may not point to Plaspy out of the box; set the reporting host to d.plaspy.com or 54.85.159.138 and port 8888.
- BLE sensor behavior and pairing modes can vary by firmware; validate BLE sensor reporting in a test deployment.
- Transport selection between UDP and TCP affects delivery characteristics and should match your reliability and battery life goals.
- Check the official TopFly documentation for firmware and feature matrices before large scale rollouts.

## Why Protocol Understanding Matters

Understanding the KnightX 300 communication protocol and connection context helps ensure correct device setup, reliable data flows into Plaspy, and faster troubleshooting when reports are missing or telemetry appears inconsistent. Knowing how the device is expected to connect and what it reports reduces deployment friction and supports long term reliability.

- Confirms device is pointed at d.plaspy.com or 54.85.159.138 and using port 8888 so Plaspy can ingest data.
- Makes it easier to troubleshoot missed reports by checking transport choice and firmware behavior.
- Helps optimize reporting intervals and transport selection for battery life and coverage trade offs.
- Clarifies how buffered logs and offline uploads appear in Plaspy when connectivity is intermittent.
- Ensures BLE sensors and optional external probes are enabled and paired to the device for full telemetry.

## Why Use Plaspy with This Protocol

Using the KnightX 300 with Plaspy provides a straightforward way to collect GNSS positions, environmental telemetry, panic events, and BLE sensor readings into a single view for fleet and asset management. Plaspy consolidates the tracker streams, applies automatic protocol detection, and presents location and sensor data in dashboards and alerting workflows that support operational visibility and incident response.

Plaspy uses the same port for all supported devices and Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint, which simplifies device configuration and onboarding. To learn more about Plaspy and how it handles device ingestion and fleet workflows visit https://www.plaspy.com. For the latest device and firmware specific protocol details verify information with the manufacturer at https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
