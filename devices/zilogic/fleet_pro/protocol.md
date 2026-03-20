---
slug: /zilogic/fleet_pro/protocol
id: fleet_pro-protocol
sidebar_label: Protocol
title: Zilogic - Fleet Pro Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for connecting the Zilogic Fleet Pro GPS tracker to Plaspy with transport and compatibility context
keywords:
  - Zilogic Fleet Pro protocol
  - Zilogic Fleet Pro GPS protocol
  - Zilogic Fleet Pro communication
  - Fleet Pro tracker Plaspy
  - Zilogic GPS tracker protocol
  - Fleet telematics protocol Plaspy
  - vehicle tracking Fleet Pro
  - Fleet Pro OBD II compatibility
  - Fleet Pro accelerometer data
  - Plaspy device compatibility
---

# Zilogic - Fleet Pro Protocol

This page describes the public protocol context for using the Zilogic Fleet Pro tracker with the Plaspy platform. It focuses on how the device communicates in broad, non sensitive terms so you can understand transport choices, reporting behavior, and the role of the tracker protocol in successful integration with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and vendor implementation, so this page remains intentionally general while referencing the Fleet Pro feature set such as its accelerometer, optional OBD II interface, GPRS and SMS reporting, configurable intervals, and multiple input options.

## Protocol Overview

The device protocol defines how the Fleet Pro reports location, status, and sensor data to a remote server so Plaspy can interpret and display the information. The protocol is the bridge between raw device readings and usable telematics in Plaspy, ensuring the platform receives timely and consistent information for tracking and analysis.

- Enables the Fleet Pro to send periodic or on demand location updates and status information to Plaspy.
- Carries sensor readings such as accelerometer events, optional OBD II parameters, and input states for remote monitoring.
- Lets the tracker identify itself and include metadata needed for Plaspy to associate data with the correct vehicle record.
- Controls reporting cadence and data payloads so you can balance real time visibility and data usage.
- Provides the contextual data Plaspy needs to translate device messages into location, trip, and diagnostic information.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and port and uses that incoming traffic to automatically determine the tracker protocol. In most cases a properly configured Fleet Pro that points to the Plaspy endpoint will be detected without manual protocol selection inside the Plaspy platform.

- Plaspy listens on a shared server endpoint so multiple tracker models can report without requiring different ports.
- When a Fleet Pro reports to the Plaspy endpoint, Plaspy examines the incoming session and associated metadata to map messages to the appropriate device record.
- Users normally do not need to choose a protocol in Plaspy if the tracker is configured to send data to the Plaspy endpoint.
- Automatic detection streamlines onboarding for devices that support standard GPRS reporting.
- If a device fails to appear, check the device network settings, APN configuration, and that the device is pointed to the correct Plaspy endpoint.

## Transport and Connection Context

Fleet Pro devices can use standard cellular data transport to reach Plaspy. For connection and routing the Fleet Pro may be configured to use either UDP or TCP depending on the device firmware and configuration, and Plaspy accepts both transports on its shared port.

- Plaspy accepts device traffic on port 8888 for all supported devices.
- Devices may be configured to point to the Plaspy domain d.plaspy.com or directly to the Plaspy server IP 54.85.159.138.
- Both UDP and TCP are supported on port 8888 depending on tracker configuration and firmware capabilities.
- All devices reporting to Plaspy use the same port, simplifying device configuration and firewall rules.
- Ensure device APN and GPRS settings allow outbound connections to the Plaspy endpoint for reliable reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message content, available telemetry fields, and transport preferences for the Fleet Pro.
- Hardware revisions and optional modules such as the OBD II interface may expose additional data fields that require mapping in your telematics workflow.
- Some manufacturers customize protocol behavior or add vendor specific extensions that affect compatibility.
- Choosing UDP versus TCP can affect message delivery characteristics and may require different device settings.
- Validate device reporting by confirming packets reach d.plaspy.com or 54.85.159.138 on port 8888 and that the device is assigned correctly in Plaspy.
- Always cross check behavior observed in the field with the official Zilogic product and firmware release notes.

## Why Protocol Understanding Matters

A basic understanding of the Fleet Pro communication protocol makes onboarding, troubleshooting, and long term operation with Plaspy smoother and more predictable. Knowing what the device is expected to send and which transports it supports helps you resolve connectivity and data mapping issues faster.

- Faster troubleshooting when device messages do not arrive or telemetry is incomplete.
- Better configuration choices for reporting intervals to balance real time needs with data and battery use.
- Clearer expectations around what OBD II and accelerometer data will be available for analytics.
- Informed decisions about using UDP or TCP depending on network conditions and reliability needs.
- More effective coordination with Zilogic support when a firmware or hardware variation impacts reporting.

## Why Use Plaspy with This Protocol

Using the Zilogic Fleet Pro with Plaspy provides organizations with consistent visibility into vehicle location, driver behavior, and vehicle health. Plaspy ingests the telemetry the Fleet Pro can provide, including accelerometer events and optional OBD II parameters, and turns it into actionable insights for fleet management, maintenance planning, and operational oversight.

If you want to learn more about how Plaspy works with devices like the Fleet Pro and what the platform offers for vehicle tracking and telematics, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance always confirm current information on the manufacturer website https://zilogic.com/ as protocol support and firmware behavior can change over time.
