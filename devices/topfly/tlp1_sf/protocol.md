---
slug: /topfly/tlp1_sf/protocol
id: tlp1_sf-protocol
sidebar_label: Protocol
title: TopFly - TLP1-SF Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for TopFly TLP1 SF tracker compatibility with Plaspy including connection and transport guidance
keywords:
  - TopFly TLP1-SF protocol
  - TopFly TLP1-SF GPS protocol
  - TopFly TLP1-SF protocol for Plaspy
  - TopFly tracking protocol
  - TLP1-SF Plaspy compatibility
  - TopFly asset tracker protocol
  - solar GPS tracker protocol
  - vehicle tracking TopFly
  - TLP1-SF communication
  - TopFly tracker Plaspy
---

# TopFly - TLP1-SF Protocol

This page covers the public protocol context for using the TopFly TLP1-SF tracker with Plaspy. It explains how the device communicates in general terms, what connection points Plaspy offers, and which transport options the tracker can use to report telemetry to the Plaspy platform.

Plaspy uses shared connection settings for supported devices and automatically detects the tracker protocol when devices are correctly configured to report to the Plaspy endpoint. Exact protocol behavior and available transports can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive information and practical integration considerations.

## Protocol Overview

The communication protocol governs how the TLP1-SF reports location, status, and alerts to a remote server and how server commands or acknowledgements are exchanged if supported. For integration with Plaspy, the primary role of the protocol is to deliver timely, identifiable telemetry that Plaspy can parse and present for fleet and asset monitoring.

- Enables the tracker to send position fixes, movement alerts, and status data to a remote endpoint for processing.
- Carries device identity information so Plaspy can associate incoming messages with the correct asset or account.
- Supports both live reporting and buffered delivery so stored points can be uploaded after coverage is restored.
- Allows selection of transport suitable for the environment such as TCP or UDP to match network reliability and power considerations.
- Provides the messaging necessary for features like geo fencing, motion alerts, and low power reporting to be actionable in Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives incoming telemetry on a single shared endpoint and automatically detects which device protocol a tracker is using when it reports to that endpoint. In most cases, users do not need to manually select the protocol inside Plaspy if the tracker is configured to send data to the Plaspy server.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888 and is the common port Plaspy uses for all supported devices
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint
- The user typically only needs to set the device to report to the Plaspy endpoint and choose the appropriate transport (TCP or UDP)
- If a device supports multiple reporting modes, ensure it is configured to use the transport and reporting interval desired for your deployment

## Transport and Connection Context

Connection and transport choices determine how the TLP1-SF delivers its data to Plaspy and can affect latency, battery consumption, and reliability. The tracker supports several network transports, but for Plaspy integration the expected options are TCP or UDP directed at the Plaspy endpoint.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration
- Devices intended for Plaspy reporting can point to d.plaspy.com or 54.85.159.138 as the destination
- All devices in Plaspy use the same port which simplifies device configuration for fleets with mixed models
- The TLP1-SF also supports other reporting methods at the manufacturer level such as MQTT and SMS, but Plaspy receives tracker telemetry over TCP or UDP on the shared endpoint
- Transport selection can be driven by factors like network reliability, firewall rules, and power profiles

## Protocol Compatibility Notes

- Firmware revisions can change reporting behavior, supported commands, and feature sets; always confirm behavior for a specific firmware level
- Hardware revisions or optional accessories may alter available transports or power management features that affect reporting cadence
- Manufacturer defaults may point devices to their own cloud endpoints; ensure the device is configured to report to the Plaspy endpoint when integrating
- Choose TCP for more reliable delivery in lossy networks and UDP when lower overhead and lower latency are priorities, as supported by the device
- Buffered uploads from the TLP1-SF allow recovery of location history after outages, but buffer size and behavior depend on firmware
- Validate any transport or TLS requirements against official TopFly documentation before deployment

## Why Protocol Understanding Matters

Knowing how the TLP1-SF communicates helps ensure successful setup, predictable reporting, and effective troubleshooting when used with Plaspy. Understanding the protocol context reduces integration friction and helps operators choose appropriate device settings for their use case.

- Helps you configure the device to report to d.plaspy.com or 54.85.159.138 using the correct transport and port
- Makes it easier to interpret telemetry patterns and diagnose gaps in reporting or unexpected behavior
- Guides selection of reporting intervals and power profiles to balance battery life and tracking accuracy
- Clarifies how buffered points are uploaded and what to expect after connectivity is restored
- Reduces time spent on trial and error by aligning device settings with Plaspy expectations

## Why Use Plaspy with This Protocol

Using the TopFly TLP1-SF with Plaspy gives organizations access to continuous location visibility, movement alerts, and historical playback backed by a platform that accepts device telemetry on a single shared endpoint. Plaspy's approach of a common port and automatic protocol detection simplifies onboarding for mixed fleets and reduces configuration overhead.

To learn more about how Plaspy can work with your TopFly devices, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and implementation guidance, please verify information on the manufacturer website https://www.topflytech.com/ since protocol support and firmware behavior can change over time.
