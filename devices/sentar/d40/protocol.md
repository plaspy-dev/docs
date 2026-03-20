---
slug: /sentar/d40/protocol
id: d40-protocol
sidebar_label: Protocol
title: Sentar - D40 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Sentar D40 smartwatch compatibility with Plaspy and connection context
keywords:
- Sentar D40 protocol
- Sentar D40 GPS protocol
- Sentar D40 communication protocol
- Sentar D40 tracking protocol
- Sentar D40 Plaspy compatibility
- Sentar smartwatch protocol
- D40 GPS tracker protocol
- D40 communication with Plaspy
- child smartwatch GPS protocol
- LBS Wi Fi tracking Plaspy
---

# Sentar - D40 Protocol

This page covers the public protocol context for using the Sentar D40 kids smartwatch with Plaspy. It explains how the device communicates with Plaspy in non sensitive terms, what to expect from on wrist reporting, and which connection settings are shared by Plaspy for incoming tracker data. The D40 is a family focused wearable that delivers LBS and Wi Fi positioning, SOS alerts, basic photo capability, and battery telemetry to centralized monitoring systems such as Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform, but exact behavior can vary by firmware version, hardware revision, and manufacturer implementation. For reference Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138. The port is 8888. The device may be configured using UDP or TCP on port 8888. All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol.

## Protocol Overview

The D40 reporting protocol enables the watch to deliver location hints, device state, and emergency notifications to Plaspy so guardians receive timely and actionable information. The public protocol context focuses on the messages the device sends and the connection endpoints used to reach the Plaspy ingestion service without exposing sensitive implementation details.

- Enables periodic and event driven location reporting derived from LBS and Wi Fi positioning useful for indoor and urban environments.
- Transmits SOS activations and basic alert metadata so Plaspy can surface urgent notifications to guardians.
- Sends battery and connectivity telemetry to support device health monitoring and alerting inside Plaspy.
- Associates lightweight situational media such as photos with location events to improve context for caregivers.
- Allows the device to identify itself and report model and state information so Plaspy can aggregate and display D40 specific data.

## How Plaspy Detects the Protocol

Plaspy receives connections on a single shared endpoint and port and uses that connection context to determine which device protocol is being used. In most cases a properly configured D40 reporting to Plaspy will be detected automatically and no manual protocol selection is required on the Plaspy side.

- Devices should point at the Plaspy endpoint d.plaspy.com or the fallback IP 54.85.159.138 to reach the platform.
- Plaspy listens on port 8888 for all supported devices which simplifies device setup and onboarding.
- The D40 may use either UDP or TCP to send reports depending on the device network stack and configuration.
- When a device sends valid reports to the Plaspy endpoint the platform identifies the tracker type and parses incoming telemetry for display.
- Users typically do not need to select a protocol inside Plaspy manually if the device is configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection context describes the network transport and endpoint information the D40 uses to communicate with Plaspy. This section focuses on how the watch reaches the Plaspy ingestion service rather than on message format specifics.

- The device may be configured to use UDP or TCP on port 8888 depending on firmware and network considerations.
- Pointing the device to d.plaspy.com or to 54.85.159.138 will direct reports to Plaspy.
- Plaspy uses the same port 8888 for all devices which reduces configuration complexity across device families.
- Cellular capable variants of the D40 use a Nano SIM and the device can send reports over the mobile data connection as well as Wi Fi.
- Network reliability and APN settings on the cellular network can affect delivery timing and should be validated in device setup.

## Protocol Compatibility Notes

- Compatibility can differ between firmware revisions and hardware variants even for the same D40 model.
- Regional versions and carrier configurations may affect which transport and network settings are available to the device.
- Because the D40 relies on LBS and Wi Fi positioning, reported location accuracy will vary by environment and available radio signals.
- Transport selection between UDP and TCP may change retry behavior and delivery reliability depending on the device firmware.
- Verify device reporting settings such as target host and port against Plaspy connection values before onboarding large numbers of devices.
- Always consult manufacturer documentation for model specific details and for any firmware updates that change protocol behavior.

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure reliable setup, faster troubleshooting, and consistent monitoring when using the D40 with Plaspy. Knowing how the watch reports location and events lets administrators tune alerts and guardians interpret the data they see.

- Confirms that the device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888 so Plaspy can ingest data.
- Helps diagnose delivery issues when reports do not appear in Plaspy by checking transport UDP or TCP settings.
- Clarifies expected telemetry such as LBS and Wi Fi location, SOS alerts, and battery reporting so alert rules are meaningful.
- Aids in planning device deployment by accounting for indoor accuracy characteristics and connectivity constraints.
- Supports long term device management by documenting firmware and configuration differences that affect behavior.

## Why Use Plaspy with This Protocol

Using the Sentar D40 with Plaspy gives guardians a centralized view of location hints, SOS events, and device health across multiple watches. Plaspy ingests LBS and Wi Fi based location updates, SOS triggers, battery status, and light situational media so monitoring and notification workflows are consistent and accessible from a single platform. This combination is well suited to family safety use cases where indoor aware positioning and quick alerts are priorities.

Learn more about Plaspy at https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time and should be verified with the official Sentar documentation at http://www.sentarsmart.com/ for the most current device specific guidance.
