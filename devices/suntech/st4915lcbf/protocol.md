---
slug: /suntech/st4915lcbf/protocol
id: st4915lcbf-protocol
sidebar_label: Protocol
title: Suntech - ST4915LCBF Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Suntech ST4915LCBF compatibility with Plaspy server settings and connection guidance
keywords:
  - Suntech ST4915LCBF protocol
  - Suntech GPS protocol
  - ST4915LCBF Plaspy
  - GPS tracker communication
  - asset tracking protocol
  - fleet management protocol
  - LTE Cat M1 tracker
  - NB IoT tracker
  - BLE gateway tracker
  - Wi Fi geolocation tracker
---

# Suntech - ST4915LCBF Protocol

This page describes the public protocol context for using the Suntech ST4915LCBF tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and what parts of the tracker reporting workflow are relevant to integration and day to day operation. The intent is to provide clear, non sensitive guidance that helps operators and integrators plan deployments and troubleshooting.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports correctly to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page emphasizes general communication concepts and the public Plaspy connection facts while encouraging validation against official manufacturer documentation.

## Protocol Overview

The protocol for the ST4915LCBF is the device's method for identifying itself to a server, reporting GNSS and sensor data, and receiving limited remote configuration or response acknowledgements. When integrated with Plaspy, the protocol ensures that position fixes, telemetry, BLE and Wi Fi hints, and power state are delivered in a form the platform can ingest for mapping, alerts, and historical reporting.

- Enables the tracker to send periodic and event driven telemetry from GNSS, accelerometer, BLE and Wi Fi subsystems to Plaspy.
- Lets the device identify itself and present device metadata needed for asset grouping and processing in Plaspy.
- Carries state and health information such as battery level, radio status, and motion events that Plaspy uses for alerts and maintenance insights.
- Supports both regular reporting and event triggered messages so the platform can balance battery life and real time visibility.
- Acts as the bridge between the field device radios and Plaspy ingestion pipelines without requiring users to manage per device parser selection.

## How Plaspy Detects the Protocol

Plaspy receives device traffic at a shared network endpoint and automatically determines the appropriate tracker protocol for supported models when the device is configured to report there. In most deployments you do not need to manually select a tracker protocol inside Plaspy if the tracker is correctly pointed at the Plaspy endpoint and using the supported transport.

- Plaspy listens on a single shared port for all devices so device traffic is consolidated for detection and ingestion.
- The Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 for direct addressing.
- The port used by Plaspy for device reporting is 8888 and this same port is used across all supported trackers.
- Trackers may be configured to use UDP or TCP to report to Plaspy depending on device capability and network considerations.
- When a supported tracker reports to the Plaspy endpoint the platform performs automatic protocol identification so manual configuration inside the platform is normally unnecessary.

## Transport and Connection Context

Connection context covers the network endpoint, transport protocol, and basic routing considerations that influence how the ST4915LCBF talks to Plaspy. Understanding transport choices helps with firewall rules, APN configuration and troubleshooting cellular or fallback behavior without needing protocol internals.

- The ST4915LCBF may be configured to use UDP or TCP on port 8888 for reporting to Plaspy.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 if DNS or routing requires direct addressing.
- Plaspy uses port 8888 for all devices so operators only need a single outbound port opened on their networks for device traffic.
- TCP is useful where delivery confirmation at the transport level is preferred while UDP may be used to optimize for lower overhead depending on device firmware.
- Ensure APN and cellular routing allow outbound connections to the Plaspy endpoint to avoid delivery failures.

## Protocol Compatibility Notes

- Firmware versions on the ST4915LCBF can alter available reporting intervals, supported transports, and optional fields in device reports.
- Hardware revisions or optional radios like BLE and Wi Fi may be present in some units and absent in others, affecting what data the device can report.
- Some features such as BLE gateway aggregation or Wi Fi geolocation augmentation are device capabilities and rely on firmware settings to be enabled.
- Selecting UDP versus TCP is a configuration option on the device and can affect reliability and power consumption; verify which transport is active for a given unit.
- Manufacturer configuration guides and release notes are the authoritative source for firmware specific protocol behavior.
- Validate compatibility by confirming the device can successfully open a session to d.plaspy.com or 54.85.159.138 on port 8888 and that Plaspy detects the device when it first reports.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps with successful deployments, faster troubleshooting, and reliable long term operation when the device is paired with Plaspy. Knowing what the device is expected to report and how it connects reduces time to resolution when devices do not appear in the platform or when telemetry looks incomplete.

- Speeds up initial provisioning by ensuring correct APN, transport and endpoint settings are applied before fielding devices.
- Helps diagnose connectivity issues by narrowing the scope to transport, DNS, firewall, or device configuration rather than assuming parser problems.
- Informs battery and reporting strategy decisions so reporting intervals and event triggers align with deployment longevity goals.
- Assists in planning for optional features like BLE aggregation or Wi Fi augmentation by confirming firmware and hardware support.
- Supports predictable alerting and maintenance workflows by ensuring health telemetry reaches Plaspy reliably.

## Why Use Plaspy with This Protocol

Using the ST4915LCBF with Plaspy provides a robust solution for organizations that need long life, rugged hardware combined with centralized visibility for assets and fleets. The device radios and onboard sensors deliver the position and telemetry data that Plaspy converts into maps, alerts, and actionable operational insights, while the shared Plaspy connection model simplifies large scale deployments.

To learn more about Plaspy and how it ingests tracker data, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and implementation guidance consult the manufacturer documentation at http://www.suntechint.com/ as protocol support and firmware behavior can change over time.
