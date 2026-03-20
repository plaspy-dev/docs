---
slug: /jointech/jt704a/protocol
id: jt704a-protocol
sidebar_label: Protocol
title: Jointech - JT704A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Jointech JT704A with Plaspy for container and cold chain tracking
keywords:
  - Jointech JT704A protocol
  - JT704A GPS protocol
  - Jointech tracker Plaspy
  - JT704A communication protocol
  - JT704A tracking protocol
  - container GPS tracker protocol
  - cold chain tracker protocol
  - fleet management JT704A
  - Jointech JT704A compatibility
  - Plaspy tracker protocol
---

# Jointech - JT704A Protocol

This page describes the public protocol context for using the Jointech JT704A tracker with Plaspy. It focuses on how the tracker communicates with the Plaspy platform in broad, non sensitive terms and explains the role of the communication settings required for integration. The goal is to help fleet and logistics teams understand how JT704A telemetry and environmental data are transmitted to Plaspy and what to check during deployments.

Plaspy uses shared connection settings across supported devices and automatically detects tracker protocols when devices are correctly pointed to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so field validation and reference to manufacturer documentation remain important when configuring devices for production use.

## Protocol Overview

The JT704A communication protocol is the mechanism that carries location fixes, environmental telemetry, and event signals from the device to the Plaspy platform. In public terms the protocol defines how the tracker identifies itself, how position and sensor readings are packaged for transmission, and how status or alert events are reported so Plaspy can parse and present them in the monitoring interface.

- Enables the JT704A to report multi mode positioning and sensor telemetry to Plaspy for real time and historical analysis.
- Allows the tracker to include identity and status information so Plaspy can associate incoming data with the correct device record.
- Supports periodic and event driven reporting modes to balance update frequency against battery life for long duration deployments.
- Carries environmental data such as temperature, humidity, and light along with location for cold chain and anti theft monitoring.
- Provides a consistent feed that Plaspy can convert into alerts, maps, and time series for operational decision making.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a shared endpoint and port and uses automatic detection to determine the protocol a tracker is using. When a JT704A is configured to report to the Plaspy endpoint, manual protocol selection inside Plaspy is generally not required. Proper device configuration and testing ensure Plaspy can correctly identify and ingest the tracker data.

- Plaspy receives device reports on a common server address and port so supported trackers can use the same connection settings.
- The shared Plaspy server endpoint is d.plaspy.com which resolves to the platform infrastructure.
- Plaspy server IP is 54.85.159.138 for cases where an IP address is used instead of a DNS name.
- All devices supported by Plaspy use the same port for incoming tracker data which simplifies device configuration.
- When the JT704A is pointed to Plaspy and network connectivity is available, Plaspy will automatically detect the tracker protocol and start ingesting data.

## Transport and Connection Context

Transport choices affect how the JT704A delivers data to Plaspy but do not change the fact that Plaspy receives and interprets the telemetry. The tracker may be configured to use either UDP or TCP depending on device capabilities and deployment constraints. Ensuring the device reports to the correct Plaspy endpoint and uses the shared port is the primary connection requirement for successful integration.

- Devices may be configured to report to the Plaspy DNS endpoint d.plaspy.com.
- As an alternative some deployments use the Plaspy server IP 54.85.159.138 when DNS is not preferred.
- The port used for all Plaspy device connections is 8888 and is consistent across supported devices.
- The JT704A can be set to use UDP or TCP on port 8888 depending on the device firmware and network environment.
- Network stability, carrier restrictions, and APN settings can influence which transport works best in a given region.

## Protocol Compatibility Notes

- Firmware variations between JT704A units can change report frequency, supported transport modes, and available telemetry fields.
- Hardware revisions or product variants may alter available sensors or input options such as tamper or door detection.
- Manufacturer side configuration commands and provisioning options may differ across regions or commercial variants.
- Selecting UDP versus TCP can affect delivery characteristics and should be validated based on mission needs for reliability and battery conservation.
- Validate device reporting settings so the JT704A points to d.plaspy.com or the Plaspy server IP and uses port 8888.
- Always test a sample device on the intended cellular network and Plaspy endpoint before wide scale deployment.

## Why Protocol Understanding Matters

Understanding how the JT704A communicates with Plaspy improves setup success, reduces troubleshooting time, and supports long term reliability for container and cold chain fleets. Even when Plaspy automatically detects the incoming format, knowing the connection context helps operations teams configure devices, design reporting intervals, and interpret telemetry anomalies.

- Ensures devices are configured to report to the correct server endpoint and port so Plaspy can ingest data.
- Helps balance reporting intervals against battery life for multi year standby objectives.
- Simplifies troubleshooting when telemetry, position, or event signals are missing or inconsistent.
- Guides decisions about transport selection TCP versus UDP in constrained network environments.
- Clarifies expectations around available environmental telemetry and how Plaspy will present sensor data.

## Why Use Plaspy with This Protocol

Using the Jointech JT704A with Plaspy provides a practical solution for organizations that need persistent visibility of containerized assets and cold chain shipments. The combination of multi mode positioning and environmental telemetry delivered to a single monitoring platform helps logistics teams manage routes, detect tamper or door events, and maintain regulatory records with minimal maintenance overhead due to the device low power design.

Plaspy’s shared connection settings and automatic protocol detection reduce configuration complexity for large scale deployments. To learn more about Plaspy and how the platform can integrate JT704A telemetry into fleet monitoring and cold chain workflows, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance please verify information with Jointech at https://www.jointcontrols.com/.
