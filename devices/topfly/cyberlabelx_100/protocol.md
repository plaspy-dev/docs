---
slug: /topfly/cyberlabelx_100/protocol
id: cyberlabelx_100-protocol
sidebar_label: Protocol
title: TopFly - CyberLabelX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for integrating the TopFly CyberLabelX 100 with Plaspy using shared connection settings and automatic detection
keywords:
  - TopFly CyberLabelX 100 protocol
  - CyberLabelX 100 GPS protocol
  - TopFly parcel tracker protocol
  - CyberLabelX Plaspy compatibility
  - Plaspy tracker protocol
  - asset tracker communication
  - parcel GPS tracker protocol
  - cold chain tracker protocol
  - TopFly tracking protocol
  - GPS tracker Plaspy integration
---

# TopFly - CyberLabelX 100 Protocol

This page summarizes the public protocol context for using the TopFly CyberLabelX 100 asset tracker with Plaspy. It focuses on how the tracker communicates with Plaspy in general, what connection settings are used publicly, and practical considerations to help teams integrate and troubleshoot the device without exposing private implementation details.

The CyberLabelX 100 is a slim rechargeable parcel tracker designed for shipment and asset visibility, offering multi constellation GNSS positioning, buffered logging, and environmental sensing. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol describes the device side behavior used to deliver location, telemetry, and alarm events to a cloud endpoint. For integration with Plaspy, the protocol’s public role is to package GNSS fixes, sensor readings, and event flags in a way the server can receive and interpret while preserving battery life and delivery reliability.

- Enables delivery of location fixes and telemetry such as temperature, motion, and light tamper events to Plaspy.
- Allows the device to identify itself and its reporting cadence so Plaspy can associate incoming data with the correct asset.
- Supports buffered logging so points collected offline are uploaded when connectivity is restored.
- Carries configurable reporting intervals to balance update frequency against battery consumption for parcel and shipment use cases.
- Provides hooks for alarm events such as tamper, motion, and temperature thresholds that trigger notifications in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device traffic on a single shared endpoint and automatically determines the tracker protocol used by each device when it begins reporting. In most cases a properly configured CyberLabelX 100 will begin appearing in Plaspy without manual protocol selection by the user.

- Plaspy listens on a shared server endpoint allowing automatic detection of the tracker protocol.
- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port, so users do not need to configure device specific ports in Plaspy.
- When a CyberLabelX 100 is pointed at the Plaspy endpoint, Plaspy automatically associates incoming data with the device and platform account.
- Typical user workflow does not require manual protocol choice inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

The CyberLabelX 100 supports multiple transports and can be configured to use the transport that best fits the deployment. For Plaspy integration the common public connection options are TCP and UDP on the shared Plaspy port, though the device can also use MQTT or SMS depending on the manufacturer configuration and subscription plan.

- The device may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- Plaspy’s public port for device reporting is 8888 and devices may use UDP or TCP on port 8888.
- The CyberLabelX 100 also supports other transports such as MQTT or SMS when required by the deployment or firmware.
- Choose UDP for minimal overhead and reduced latency where network reliability allows, or TCP when session reliability and ordered delivery are preferred.
- Confirm the device APN, SIM provisioning, and transport selection during field setup to ensure connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware versions can change message timing, available telemetry fields, or the exact way events are reported; validate behavior after firmware updates.
- Hardware revisions or optional external probes may add or change telemetry channels that affect how the tracker reports environmental data.
- Transport choice (TCP, UDP, MQTT, SMS) can influence delivery guarantees and the perceived behavior of the protocol in intermittent networks.
- Buffered logging behavior is useful for intermittent coverage but test reupload behavior after extended offline periods to confirm retention limits.
- Manufacturer configuration defaults may vary by region or firmware build; always check the device APN and reporting target before deployment.
- Verify any data security or encryption options supported by the device and confirm compatibility with your Plaspy configuration.

## Why Protocol Understanding Matters

A practical understanding of the tracker protocol helps ensure reliable tracking, accurate telemetry, and smoother troubleshooting during deployments with Plaspy. Knowing what the device sends and how it reaches Plaspy reduces setup time and helps isolate issues when data looks incomplete or delayed.

- Ensures reporting intervals and battery profiles are aligned with operational expectations for parcel and asset workflows.
- Helps diagnose connectivity issues arising from APN, SIM, or transport misconfiguration.
- Allows teams to interpret buffered logging behavior when coverage is intermittent and verify that historical points arrive as expected.
- Guides decisions on transport selection to match reliability and latency requirements of the deployment.
- Supports validation of event triggers such as tamper, motion, and temperature alerts so notifications in Plaspy are meaningful.

## Why Use Plaspy with This Protocol

Using the CyberLabelX 100 with Plaspy provides logistics and asset teams with a compact solution for real time visibility, environmental telemetry, and event driven alerts. Plaspy’s automatic protocol detection and shared connection endpoint simplify onboarding so the tracker can begin reporting with minimal server configuration work.

If you want to learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation guidance consult the manufacturer documentation at https://www.topflytech.com/ as device features and firmware may change over time.
